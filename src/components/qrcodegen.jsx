import "../styling/qrcodegen.css"

export default function QRCodeGenerator() {

    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input type="text" name="qr-code" placeholder="Enter your value" />
                <button>Generate</button>
            </div>
        </div>
    )
}