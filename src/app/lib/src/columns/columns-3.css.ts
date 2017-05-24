export const column_3 = `
    :host .context-view.columns-3 /deep/ .column-1 {
        left: 0;
        width: calc(100vw / 24 * 6);
        padding-left: 4.2vw;
    }

    :host .context-view.columns-3 /deep/ .column-2 {
        left: calc(100vw / 24 * 6);
        width: calc(100vw / 24 * 6);
    }

    :host .context-view.columns-3 /deep/ .column-3 {
        left: calc(100vw / 24 * (6 + 6));
        width: calc(100vw / 24 * 12);
    }



    :host .context-list.columns-3 /deep/ .column-1 {
        left: 0;
        width: calc(100vw / 24 * 6);
        padding-left: 4.2vw;
    }

    :host .context-list.columns-3 /deep/ .column-2 {
        left: calc(100vw / 24 * 6);
        width: calc(100vw / 24 * 6);
    }

    :host .context-list.columns-3 /deep/ .column-3 {
        left: calc(100vw / 24 * (6 + 6));
        width: calc(100vw / 24 * 12);
    }



    :host .context-form.columns-3 /deep/ .column-1 {
        display: none;
    }

    :host .context-form.columns-3 /deep/ .column-2 {
        display: none;
    }

    :host .context-form.columns-3 /deep/ .column-3 {
        display: none;
    }


    @media all and (max-width: 979px) {

        :host .context-view.columns-3 /deep/ .column-1 {
            display: none;
        }

        :host .context-view.columns-3 /deep/ .column-2 {
            display: none;
        }

        :host .context-view.columns-3 /deep/ .column-3 {
            left: 0;
            width: 100vw;
            padding-left: 8.4vw;
        }





        :host .context-list.columns-3 /deep/ .column-1 {
            display: none;
        }

        :host .context-list.columns-3 /deep/ .column-2 {
            display: none;
        }

        :host .context-list.columns-3 /deep/ .column-3 {
            left: 0;
            width: 100vw;
            padding-left: 8.4vw;
        }





        :host .context-form.columns-3 /deep/ .column-1 {
            display: none;
        }

        :host .context-form.columns-3 /deep/ .column-2 {
            display: none;
        }

        :host .context-form.columns-3 /deep/ .column-3 {
            left: 0;
            width: 100vw;
            padding-left: 4.2vw;
        }


    }
`;

