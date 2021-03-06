﻿import {Component, OnInit }   from '@angular/core';
import {GridOptions, Holding, Column, GridData, HoldingsGroupType} from './models'
import {AccountService} from './services.barrel'
import {HoldingsDataService} from './holdings-data.service'
import { Subscription }   from 'rxjs/Subscription';
@Component({ selector: 'holdings-grid', moduleId: module.id, templateUrl: './holdings-grid.component.html' })

export class HoldingsGridComponent implements OnInit {
    gridOptionslg: GridOptions;
    gridOptionsmd: GridOptions;
    gridOptionssm: GridOptions;
    gridOptionsxs: GridOptions;
    private subscription: Subscription;
    holdingsDatalg: GridData;
    holdingsDatamd: GridData;
    holdingsDatasm: GridData;
    holdingsDataxs: GridData;
    constructor(private as: AccountService, private hd: HoldingsDataService) {
        this.subscription = this.as.account$.subscribe(
            () => this.updateGridData());
    }



    updateGridData() {
        let datalg = new Array();
        let datamd = new Array();
        let datasm = new Array();
        let dataxs = new Array();


        for (let i = 0; i < 20; i++) {
            datalg[i] = new Array<number>();
            for (let j = 0; j < 12; j++)
                datalg[i].push(this.as.Account.ID || 999);
        }

        for (let i = 0; i < 20; i++) {
            datamd[i] = new Array<number>();
            for (let j = 0; j < 9; j++)
                datamd[i].push(this.as.Account.ID || 999);
        }
        for (let i = 0; i < 20; i++) {
            datasm[i] = new Array<number>();
            for (let j = 0; j < 6; j++)
                datasm[i].push(this.as.Account.ID || 999);
        }
        for (let i = 0; i < 20; i++) {
            dataxs[i] = new Array<number>();
            for (let j = 0; j < 3; j++)
                dataxs[i].push(this.as.Account.ID || 999);
        }
        this.hd.getHoldingsByGroupMode(this.as.Account, HoldingsGroupType.Detailed).then(i => {
            this.holdingsDatalg = { data: datalg };
            this.holdingsDatamd = { data: datamd };
            this.holdingsDatasm = { data: datasm };
            this.holdingsDataxs = { data: dataxs };
        });
    }


    ngOnInit() {

        let lgCols = [];
        let mdCols = [];
        let smCols = [];
        let xsCols = [];

        for (let i = 0; i < 12; i++)
            lgCols.push({ Caption: `column${i}`, Type: 'number' });
        for (let i = 0; i < 9; i++)
            mdCols.push({ Caption: `column${i}`, Type: 'number' });
        for (let i = 0; i < 6; i++)
            smCols.push({ Caption: `column${i}`, Type: 'number' });
        for (let i = 0; i < 3; i++)
            xsCols.push({ Caption: `column${i}`, Type: 'number' });

        this.gridOptionslg = { Columns: lgCols };
        this.gridOptionsmd = { Columns: mdCols };
        this.gridOptionssm = { Columns: smCols };
        this.gridOptionsxs = { Columns: xsCols };
        this.updateGridData();
        //let data = [];
        //for (let i = 0; i < 50; i++)
        //    data.push([this.as.Account.ID || 999, this.as.Account.ID || 999, `item ${this.as.Account.ID || 999}`]);
        //this.hd.getHoldingsByGroupMode(this.as.Account, HoldingsGroupType.Detailed).then(i => { this.holdingsData = { data: data } });
    }
}