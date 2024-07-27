package com.example.photogallery

import androidx.lifecycle.LiveData
import androidx.lifecycle.ViewModel
import retrofit2.Call

class PhotoGalleryViewModel:ViewModel() {
    private val flickrFetchr = FlickrFetchr()
    val galleryItemLiveData: LiveData<List<GalleryItem>> = flickrFetchr.fetchPhotos()
    private val flickrRequest: Call<FlickrResponse> = flickrFetchr.flickrRequest
    override fun onCleared() {
        super.onCleared()
            flickrRequest.cancel()
    }
}