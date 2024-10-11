import {ComponentFixture, TestBed} from "@angular/core/testing";
import {XOptionComponent} from "./x-option.component";

describe("XOptionComponent", () => {
    let component: XOptionComponent;
    let fixture: ComponentFixture<XOptionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [XOptionComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(XOptionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
