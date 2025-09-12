import{j as n}from"./iframe-2F154eXh.js";import{$ as j}from"./Form-CL7MiUKP.js";import{G}from"./Grid-BvnwWM5U.js";import{G as e}from"./GridItem-CZPwHExS.js";import{T as r}from"./TextField-C_qZ0zDu.js";import{S as I}from"./Select-CH90Tt_g.js";import{B as a}from"./Button-CpWyZOpj.js";import{R as g,a as b}from"./Radio-BU5d6CO3.js";import{C as h}from"./CheckboxGroup-POhwHB0N.js";import{C as k}from"./Checkbox-DtIz_5vl.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CpCeHqF1.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D1kQJ-9u.js";import"./useFocusRing-L28h-rJf.js";import"./index-B3znPG9_.js";import"./index-D09x0JUb.js";import"./TextFieldBase-DHOEEMgY.js";import"./TextField-D1rNZAPV.js";import"./FieldError-jHTv_Frh.js";import"./Text-CEqrfg7G.js";import"./Text-CfqyxTxk.js";import"./ListKeyboardDelegate-BrTbx3ju.js";import"./SelectionManager-9oZZsIpD.js";import"./useEvent-DM590-Mo.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BfYkFNkn.js";import"./useDescription-BJ8BvkKQ.js";import"./useControlledState-a-e40tok.js";import"./Group-D9RTumIZ.js";import"./Input-DF17WclQ.js";import"./Hidden-CpfmBQvh.js";import"./Button-ZBq8Kjh7.js";import"./useLabels-DIsUitJe.js";import"./useButton-CGxd0eLy.js";import"./useTextField-Dbd4_xTN.js";import"./useField-Bao_Q-BJ.js";import"./TextField.module-DjUItNl5.js";import"./Label-Bo-_3esk.js";import"./Dialog-8WS2wrFW.js";import"./RSPContexts-8lysayna.js";import"./OverlayArrow-CMCtbn9i.js";import"./useResizeObserver-BEre4iPs.js";import"./Collection-Cl0uCD5D.js";import"./index-Bx2W5Ygb.js";import"./Separator-BoRiVVWf.js";import"./PressResponder-oovtsWxU.js";import"./useLocalizedStringFormatter-DmFKvyTs.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CqIs0BSb.js";import"./Dialog-XwxJerB0.js";import"./useLocalizedStringFormatter-BOF5tq3K.js";import"./x-CNTaIAV5.js";import"./createLucideIcon--K2WjAnW.js";import"./Heading-DcQMcKK7.js";import"./info-Cp85y0-T.js";import"./Tag-DasLrI0z.js";import"./ListBox-B5jZgXC1.js";import"./DragAndDrop-BDYp4HnP.js";import"./inertValue-DzkPd9HB.js";import"./useListState-Cmei7dsy.js";import"./useHighlightSelectionDescription-BJxAdKDP.js";import"./useUpdateEffect-DkYS-Lfj.js";import"./useHasTabbableChild-Bid-uVrm.js";import"./check-CWc-KFja.js";import"./ListBoxSection-DKLoBeRO.js";import"./Virtualizer-xL7XwYck.js";import"./useObserveElement-CsH1FXkj.js";import"./chevron-down-DHkytSD2.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-XtzhlQs6.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
