using AppUtility.APIRequest;
using Data.Models;
using Entities.Enums;
using Entities.Models;
using Infrastructure.Interface;
using Newtonsoft.Json;
using Service.Models;
using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using WebApp.Models;

namespace WebApp.Servcie
{

    public interface ICheckOutAPI
    {
        Task<IResponse<IEnumerable<UserAddress>>> GetUserGetAddress(string _token);
        Task<IResponse<IEnumerable<PaymentMode>>> GetPaymentMode(bool IsCod, string _token);
        Task<PlaceOrderResponse> PlaceOrder(PlaceOrderReq req, string _token);
        Task<Response> AddAddress(UserAddress model, string _token);
    }
    public class CheckOutAPI : ICheckOutAPI
    {
        private string _apiBaseURL;
        public CheckOutAPI(AppSettings appSettings)
        {
            _apiBaseURL = appSettings.WebAPIBaseUrl;
        }


        public async Task<IResponse<IEnumerable<UserAddress>>> GetUserGetAddress(string _token)
        {
            var res = new Response<IEnumerable<UserAddress>>
            {
                StatusCode = ResponseStatus.Failed,
                ResponseText = "Somthing Went Wrong",
            };
            var Response = await AppWebRequest.O.PostAsync($"{_apiBaseURL}/api/UserAddress/GetAddress", null, _token);
            if (Response.HttpStatusCode == HttpStatusCode.OK)
            {
                try
                {
                    var deserializeObject = JsonConvert.DeserializeObject<Response<IEnumerable<UserAddress>>>(Response.Result);
                    return deserializeObject;
                }
                catch (Exception e)
                {
                    res.ResponseText = e.Message;
                }
            }
            return res;

        }


        public async Task<IResponse<IEnumerable<PaymentMode>>> GetPaymentMode(bool IsCod,string _token)
        {
            var res = new Response<IEnumerable<PaymentMode>>
            {
                StatusCode = ResponseStatus.Failed,
                ResponseText = "Somthing Went Wrong",
            };
            
            var Response = await AppWebRequest.O.PostAsync($"{_apiBaseURL}/api/PlaceOrder/GetPaymentMode?IsCod={IsCod}",null, _token);
            if (Response.HttpStatusCode == HttpStatusCode.OK)
            {
                try
                {
                    var deserializeObject = JsonConvert.DeserializeObject<Response<IEnumerable<PaymentMode>>>(Response.Result);
                    return deserializeObject;
                }
                catch (Exception e)
                {
                    res.ResponseText = e.Message;
                }
            }
            return res;

        }
        public async Task<PlaceOrderResponse> PlaceOrder(PlaceOrderReq req, string _token)
        {
            var res = new PlaceOrderResponse
            {
                StatusCode = ResponseStatus.Failed,
                ResponseText = "Somthing Went Wrong",
            };
            var Response = await AppWebRequest.O.PostAsync($"{_apiBaseURL}/api/PlaceOrder/PlaceOrder", JsonConvert.SerializeObject(req), _token);
            if (Response.HttpStatusCode == HttpStatusCode.OK)
            {
                try
                {
                  res = JsonConvert.DeserializeObject<PlaceOrderResponse>(Response.Result);
                }
                catch (Exception e)
                {
                    res.ResponseText = e.Message;
                }
            }
            return res;

        }
        public async Task<Response> AddAddress(UserAddress req, string _token)
        {
            var res = new Response
            {
                StatusCode = ResponseStatus.Failed,
                ResponseText = "Somthing Went Wrong",
            };
            var Response = await AppWebRequest.O.PostAsync($"{_apiBaseURL}/api/UserAddress/AddUpdate", JsonConvert.SerializeObject(req), _token);
            if (Response.HttpStatusCode == HttpStatusCode.OK)
            {
                try
                {
                    var deserializeObject = JsonConvert.DeserializeObject<Response>(Response.Result);
                    return deserializeObject;
                }
                catch (Exception e)
                {
                    res.ResponseText = e.Message;
                }
            }
            return res;

        }


    }
}
