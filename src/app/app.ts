import { RichTextEditor, Toolbar, Link, Audio, Video, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
// Registering Syncfusion license key
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Mgo+DSMBaFt/QHRqVVhkVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jSn5adEdhXH5ecnBUTw==;Mgo+DSMBPh8sVXJ0S0J+XE9AflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdUVqW31cdXVVRGVaWA==;ORg4AjUWIQA/Gnt2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkZjUH1ccnFURmJaWE0=;MTI5MzQ3NUAzMjMwMmUzNDJlMzBqVENla1dtZXVoZnhlSGhtTW9QNk10TmhFbjJncGw1YURIeS9uZ1VvY2xzPQ==;MTI5MzQ3NkAzMjMwMmUzNDJlMzBQRDh1TkgxQTFOc1F4cFIrdVhwVm51RFFnZEhuVkFndEVKckV0MmlZTnM4PQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVgWXZccnZQR2BfUkN/;MTI5MzQ3OEAzMjMwMmUzNDJlMzBvMkFvV1ltTHJ2MkFIZU9YT0hVU2dUSThZaVkxTDR0R0Y3T1NmQ3FMQkpRPQ==;MTI5MzQ3OUAzMjMwMmUzNDJlMzBtYkt3NGRjSkJ1dm14UFJ5OHJJYUgvaVVreUpCd3E2cGJSWUdSdGtQYktNPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkZjUH1ccnFURmRYU00=;MTI5MzQ4MUAzMjMwMmUzNDJlMzBOSFByUXI3SmJxeEJVV2x2enBkMzltWVNSdnNtSEd2Q1pnUTQvU1QxVkE0PQ==;MTI5MzQ4MkAzMjMwMmUzNDJlMzBNSDZFUlJyNVF5cFRqY1Y1OGtSNWxYWHFjRXdmc0Y0UVdtZTA4QkdoQmpFPQ==;MTI5MzQ4M0AzMjMwMmUzNDJlMzBvMkFvV1ltTHJ2MkFIZU9YT0hVU2dUSThZaVkxTDR0R0Y3T1NmQ3FMQkpRPQ==');

RichTextEditor.Inject(Toolbar, Link, Audio, Video, Image, HtmlEditor, QuickToolbar);

const richtextConfigure = {
    fontFamily: {
        items: [
            { text: "Segoe UI", value: "Segoe UI", cssClass: "e-segoe-ui", command: "Font", subCommand: "FontName" },
            { text: "Roboto", value: "Roboto", command: "Font", subCommand: "FontName" }, // here font is added
            { text: "Great vibes", value: "Great Vibes,cursive", command: "Font", subCommand: "FontName" }, // here font is added
            { text: "Noto Sans", value: "Noto Sans", command: "Font", subCommand: "FontName" },
            { text: "Impact", value: "Impact,Charcoal,sans-serif", cssClass: "e-impact", command: "Font", subCommand: "FontName" },
            { text: "Tahoma", value: "Tahoma,Geneva,sans-serif", cssClass: "e-tahoma", command: "Font", subCommand: "FontName" },
        ]
    },
    fontSize: {
        default: "16px",
        items: [
            { text: "8px", value: "8px", },
            { text: "10px", value: "10px", },
            { text: "11px", value: "11px", },
            { text: "12px", value: "12px", },
            { text: "13px", value: "13px", },
            { text: "14px", value: "14px", },
            { text: "15px", value: "15px", },
            { text: "16px", value: "16px", },
            { text: "17px", value: "17px", },
            { text: "18px", value: "18px", },
            { text: "24px", value: "19px", },
            { text: "36px", value: "20px", },

        ],
    },
    fontColor: {
        modeSwitcher: true,
    },
    backgroundColor: {
        modeSwitcher: true,
    },
    toolbarSettings: {
        // @ts-ignore
        type: 'MultiRow',
        items: [
            'Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', 'Audio', 'Video', '|',
            'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo', '|',
            {
                tooltipText: 'Insert Image',
                undo: true,
                click: () => {
                    console.log('Insert Image');
                },
                template: "<button class=\"e-tbar-btn e-btn\" tabindex=\"-1\" style=\"width:100%\">" +
                    "<span class='e-btn-icon e-image e-icons' style='font-weight: 500;'></span>" +
                    "</button>"
            }
        ]
    },
};



// @ts-ignore
window.initRichtextEditor = function (eLementId, options = {}) {
    let defaultRTE: RichTextEditor = new RichTextEditor(
        // @ts-ignore
        richtextConfigure, ...options
    );
    defaultRTE.appendTo(eLementId);
};

// example of usage
// @ts-ignore
window.initRichtextEditor('#defaultRTE')