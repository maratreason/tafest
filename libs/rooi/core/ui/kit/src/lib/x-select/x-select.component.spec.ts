import {ComponentFixture, TestBed} from "@angular/core/testing";
import {XSelectComponent} from "./x-select.component";

describe("XSelectComponent", () => {
    let component: XSelectComponent;
    let fixture: ComponentFixture<XSelectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [XSelectComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(XSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
