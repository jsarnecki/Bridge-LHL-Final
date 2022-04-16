if Rails.env === 'production'
	Rails.application.config.session_store :cookie_store,
	                                       key: '_langex',
	                                       domain: 'langex-json-api'
else
	Rails.application.config.session_store :cookie_store, key: '_langex'
end
