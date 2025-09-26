import{j as n}from"./iframe-D-6Ee-mj.js";import{$ as j}from"./Form-DQf8wN2J.js";import{G}from"./Grid-Dy5sOsPI.js";import{G as e}from"./GridItem-DZ2SJMPZ.js";import{T as r}from"./TextField-CQbsuLjM.js";import{S as I}from"./Select-BSmiTcOQ.js";import{B as a}from"./Button-kSrNEEPZ.js";import{R as g,a as b}from"./Radio-DTcW8I-o.js";import{C as h}from"./CheckboxGroup-BQ47sPgg.js";import{C as k}from"./Checkbox-CdaO6Zh-.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-D0287Tj-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B2-3xwhT.js";import"./useFocusRing-D-d0SP0_.js";import"./index-DqbntyF3.js";import"./index-BQc5UCFG.js";import"./TextFieldBase-BNkoxz5M.js";import"./TextField-1bzuq6tF.js";import"./FieldError-Drboz9kR.js";import"./Text-DW9EioPM.js";import"./Text-C74i_UEs.js";import"./ListKeyboardDelegate-DL7vkNk-.js";import"./SelectionManager-NdV2yHAd.js";import"./useEvent-CYPwAjyo.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-C6vnceNE.js";import"./useDescription-scTUE-ik.js";import"./useControlledState-BqYE3lBx.js";import"./Group-DUAisEPz.js";import"./Input-Cr715x6P.js";import"./Hidden-ukiW7aCT.js";import"./Button-CXhFpVHn.js";import"./useLabels-Dxg2U4yU.js";import"./useButton-B2jxm0A0.js";import"./useTextField-BOUoiCWP.js";import"./useField-CU8N3M29.js";import"./TextField.module-DjUItNl5.js";import"./Label-Dicjf7WX.js";import"./Dialog-CI21cWRX.js";import"./RSPContexts-tjWnEZjf.js";import"./OverlayArrow-Dy4ug4bs.js";import"./useResizeObserver-DomhiBW2.js";import"./Collection-PzsbAZ3H.js";import"./index-gCaAS7no.js";import"./Separator-CcEw3Ts4.js";import"./PressResponder-DNxg6jOo.js";import"./useLocalizedStringFormatter-DjV8vvcP.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CELIIxQv.js";import"./Dialog-CfmS2art.js";import"./useLocalizedStringFormatter-p7zqNnO0.js";import"./x-CJgno1Y7.js";import"./createLucideIcon-2JKKFR2D.js";import"./Heading-Ca3I9TFb.js";import"./info-Dqh9EWm5.js";import"./Tag-eJXhtOg8.js";import"./ListBox-6H8ZC4zK.js";import"./DragAndDrop-BPFAS51n.js";import"./inertValue-CnAHwqwn.js";import"./useListState-BW-Oxa5B.js";import"./useHighlightSelectionDescription-C3lZ1jIZ.js";import"./useUpdateEffect-tHvha14e.js";import"./useHasTabbableChild-pgqtechk.js";import"./check-CtTH_hYA.js";import"./ListBoxSection-DQKg2lUQ.js";import"./Virtualizer-h0CcF9N4.js";import"./useObserveElement-CGmKA9vu.js";import"./chevron-down-DBvQGhcx.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CfhYFkQR.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
