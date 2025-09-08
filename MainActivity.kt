// src/main/java/org/eu/fastsong/MainActivity.kt (Jika menggunakan Kotlin)
package org.eu.fastsong

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient // Penting untuk menjaga navigasi di dalam WebView

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webView)

        // Konfigurasi WebView
        val webSettings: WebSettings = webView.settings
        webSettings.javaScriptEnabled = true // Aktifkan JavaScript
        webSettings.domStorageEnabled = true // Penting untuk beberapa aplikasi web modern

        // Set WebViewClient untuk menangani pemuatan halaman di dalam WebView
        // Ini mencegah browser eksternal terbuka saat mengklik tautan
        webView.webViewClient = WebViewClient()

        // Muat URL yang diinginkan
        webView.loadUrl("https://fastsong.eu.org")
    }

    // Tangani tombol kembali (back button) pada perangkat agar WebView bisa kembali ke halaman sebelumnya
    override fun onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack()
        } else {
            super.onBackPressed()
        }
    }
}
