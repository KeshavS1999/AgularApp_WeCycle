import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { TextField } from "tns-core-modules/ui/text-field";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { View } from "tns-core-modules/ui/core/view";
import { getString } from "application-settings";
import { alert, LoginService, User } from "../shared";
import { DatabaseService } from "../database/sqlite.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    locations: { city: string, country: string, imageSrc: string }[] = [
        { city: "CUSTOMER", country: "-Order Service and Market Place-", imageSrc: "~/images/customer" },
        { city: "BUSINESS", country: "-Come be a part of our platform-", imageSrc: "~/images/business" },
        { city: "EMPLOYEE", country: "-View your next job-", imageSrc: "~/images/worker" },
    ];

    constructor(
        private routerExtensions: RouterExtensions,
        private userService: LoginService,
        private database: DatabaseService
    ) {
    }

    ngOnInit(): void {
    }

    logout() {
        this.userService.logout();
        this.routerExtensions.navigate(["/login"]);
    }
   

}
