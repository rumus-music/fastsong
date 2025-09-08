// src/main/java/org/eu/fastsong/MainActivity.java (Jika menggunakan Java)
package org.eu.fastsong;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient; // Penting untuk menjaga navigasi di dalam WebView

public class MainActivity extends AppCompatActivity {

    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        webView = findViewById(R.id.webView);

        // Konfigurasi WebView
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true); // Aktifkan JavaScript
        webSettings.setDomStorageEnabled(true); // Penting untuk beberapa aplikasi web modern

        // Set WebViewClient untuk menangani pemuatan halaman di dalam WebView
        // Ini mencegah browser eksternal terbuka saat mengklik tautan
        webView.setWebViewClient(new WebViewClient());

        // Muat URL yang diinginkan
        webView.loadUrl("https://fastsong.eu.org");
    }

    // Tangani tombol kembali (back button) pada perangkat agar WebView bisa kembali ke halaman sebelumnya
    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
