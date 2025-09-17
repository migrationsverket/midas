import{j as n}from"./iframe-Dl-JMAeE.js";import{$ as j}from"./Form-BLINw8ob.js";import{G}from"./Grid-Cw8kiQ8s.js";import{G as e}from"./GridItem-UO5eCzmA.js";import{T as r}from"./TextField-D775-WIF.js";import{S as I}from"./Select-DgqPL-Pj.js";import{B as a}from"./Button-BKMITPJ0.js";import{R as g,a as b}from"./Radio-NpIsIxxC.js";import{C as h}from"./CheckboxGroup-JPl5sxaq.js";import{C as k}from"./Checkbox-BdsBss7z.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CYNhgdYX.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DL3UePTx.js";import"./useFocusRing-BOH4N8o8.js";import"./index-Dki5T0ci.js";import"./index-Bq4oUtdi.js";import"./TextFieldBase-D--SDrlN.js";import"./TextField-CnQ895gv.js";import"./FieldError-CNcV-E4H.js";import"./Text-B7Y6AYX8.js";import"./Text-DMfqZotz.js";import"./ListKeyboardDelegate-EKbjfD8J.js";import"./SelectionManager-DjGoldDT.js";import"./useEvent-00aakS-9.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DhbJORVX.js";import"./useDescription-C6mZUTLg.js";import"./useControlledState-DqoZgzyd.js";import"./Group-DJkhiNwM.js";import"./Input-lVCb9VdQ.js";import"./Hidden-DzcWrEOs.js";import"./Button-CejbkTvU.js";import"./useLabels-BUlGSCz3.js";import"./useButton-Ad9DpLq5.js";import"./useTextField-CM1iFQTK.js";import"./useField-eUf4yDgC.js";import"./TextField.module-DjUItNl5.js";import"./Label-CPDVrUpU.js";import"./Dialog-SjJY1E3M.js";import"./RSPContexts-DDS25naK.js";import"./OverlayArrow-BLrDzetc.js";import"./useResizeObserver-DcvCLD2n.js";import"./Collection-z-twZmlQ.js";import"./index-B_-iDhLE.js";import"./Separator-CmTBt5rL.js";import"./PressResponder-9Htvj1Fd.js";import"./useLocalizedStringFormatter-CNbrJtFD.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-ojLQ5maJ.js";import"./Dialog-lgu0FZRC.js";import"./useLocalizedStringFormatter-mysXX9n0.js";import"./x-BuynXjy2.js";import"./createLucideIcon-COxpDhoC.js";import"./Heading-BjIurNI1.js";import"./info-BbUwqzxH.js";import"./Tag-DsMpMYmo.js";import"./ListBox-KYTndM2F.js";import"./DragAndDrop-hhvB97Hx.js";import"./inertValue-BTcwmvYq.js";import"./useListState-Cs-M-wpd.js";import"./useHighlightSelectionDescription-Ce_TbQ69.js";import"./useUpdateEffect-C2RQcAJ9.js";import"./useHasTabbableChild-BvWkskbJ.js";import"./check-CzTynVoa.js";import"./ListBoxSection-Dw5SD1Bo.js";import"./Virtualizer-Bw2jIvRk.js";import"./useObserveElement-B1PKyT0J.js";import"./chevron-down-UI4aXag1.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DSYIQKfS.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
