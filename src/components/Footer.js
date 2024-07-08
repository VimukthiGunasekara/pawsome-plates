import { redirectToWeb } from "./utils/utils";

export default function FooterSection() {
    return (
        <div class="footer">
            <p>Download at your Fingertips</p>
            <button onClick={redirectToWeb} className="btn" type="button">Get it Now</button>
        </div>
    )
}