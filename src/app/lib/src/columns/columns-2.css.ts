export const column_2 = `
    :host .context-view.columns-2 /deep/ .column-1 {
        left: 0;
        width: calc(100vw / 24 * 17);
        padding-left: 4.2vw;
    }

    :host .context-view.columns-2 /deep/ .column-2 {
        left: calc(100vw / 24 * 17);
        width: calc(100vw / 24 * 7);
        padding-left: 0;
    }

    :host .context-view.columns-2 /deep/ .column-3 {
        display: none;
    }



    :host .context-list.columns-2 /deep/ .column-1 {
        left: 0;
        width: calc(100vw / 24 * 6);
        padding-left: 4.2vw;
    }

    :host .context-list.columns-2 /deep/ .column-2 {
        left: calc(100vw / 24 * 6);
        width: calc(100vw / 24 * 18);
        padding-left: 0
    }

    :host .context-list.columns-2 /deep/ .column-3 {
        display: none;
    }



    :host .context-form.columns-2 /deep/ .column-1 {
        left: 0;
        width: calc(100vw / 24 * 13);
        padding-left: 4.2vw;
    }

    :host .context-form.columns-2 /deep/ .column-2 {
        left: calc(100vw / 24 * 13);
        width: calc(100vw / 24 * 11);
        padding-left: 4.2vw;
    }

    :host .context-form.columns-2 /deep/ .column-3 {
        display: none;
    }


    @media all and (max-width: 979px) {



        :host .context-view.columns-2 /deep/ .column-1 {
            left: 0;
            width: 100vw;
            padding-left: 8.4vw;
        }

        :host .context-view.columns-2 /deep/ .column-2 {
            display: none;
        }

        :host .context-view.columns-2 /deep/ .column-3 {
            display: none;
        }





        :host .context-list.columns-2 /deep/ .column-1 {
            display: none;
        }

        :host .context-list.columns-2 /deep/ .column-2 {
            left: 0;
            width: 100vw;
            padding-left: 8.4vw;
        }

        :host .context-list.columns-2 /deep/ .column-3 {
            display: none;
        }





        :host .context-form.columns-2 /deep/ .column-1 {
            left: 0;
            width: 100vw;
            padding-left: 8.4vw;
            padding-right: 8.4vw;
        }

        :host .context-form.columns-2 /deep/ .column-2 {
            display: none;
        }

        :host .context-form.columns-2 /deep/ .column-3 {
            display: none;
        }


    }
`;

