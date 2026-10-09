using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Application.Actvities;

public class EditActivity : IRequest
{
    public class Command : IRequest
    {
        public required Activity Activity { get; set; }

        public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command>
        {
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                Activity activity = await context.Activities.FirstOrDefaultAsync<Activity>(x => x.Id == request.Activity.Id, cancellationToken)
                    ?? throw new Exception("Activity not found");
                mapper.Map(request.Activity, activity);

                await context.SaveChangesAsync(cancellationToken);
            }
        }
    }
}

