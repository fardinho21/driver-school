import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "cameltospace"
})
export class CamelToSpacePipe implements PipeTransform {

    transform(value : string) {
        let s = value;
        try {
            s = value.split(/(?=[A-Z])/).join(" ")
        } catch(err) {
            return value;
        }
        return s;
    }
}