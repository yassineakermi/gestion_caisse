
 const Toast = (message) => {
    // Get the snackbar DIV
    var x = document.getElementById(".content-wrapper").appendChild(
        <div id="toastsContainerTopRight" className="toasts-top-right fixed">
            <div className="toast bg-success fade show" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="mr-auto">Sucsess</strong><small>Subtitle</small>
                    <button data-dismiss="toast" type="button" className="ml-2 mb-1 close" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="toast-body">{message}</div>
            </div>
        </div>
    );
    // Add the "show" class to DIV

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { document.removeChild(x) }, 3000);
}

export default Toast