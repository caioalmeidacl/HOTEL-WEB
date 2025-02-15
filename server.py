import http.server
import socketserver


class CORSRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")  # Allow all origins
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        super().end_headers()


PORT = 8000
with socketserver.TCPServer(("", PORT), CORSRequestHandler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    httpd.serve_forever()
