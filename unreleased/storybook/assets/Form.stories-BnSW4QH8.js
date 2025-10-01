import{j as n}from"./iframe-DCSq0-j9.js";import{$ as j}from"./Form-TSbHQ7NQ.js";import{G}from"./Grid-CuMh_aB9.js";import{G as e}from"./GridItem-D5bhEPDa.js";import{T as r}from"./TextField-DsIKDKjh.js";import{S as I}from"./Select-DOAveDpp.js";import{B as a}from"./Button-DZo5l6kp.js";import{R as g,a as b}from"./Radio-m5974Z5Q.js";import{C as h}from"./CheckboxGroup-D1V4Ok4N.js";import{C as k}from"./Checkbox-CFLmVOod.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DrJ5-z8f.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BSpmtVTk.js";import"./useFocusRing-DMky3gKC.js";import"./index-B4xZwINQ.js";import"./index-Du-7c5Zh.js";import"./TextFieldBase-C3PlVuzp.js";import"./TextField-CxxRiAIs.js";import"./FieldError-Br2P4vd2.js";import"./Text-D5DMfOaX.js";import"./Text-0W6HO9fW.js";import"./context-CsyiBWhD.js";import"./SelectionManager-Hws6fK5z.js";import"./useEvent-CQs6MVrK.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-B4BxUzIT.js";import"./useDescription-LBhSOD8-.js";import"./useControlledState-CnPbz5Aq.js";import"./Group-CkemwBqX.js";import"./Input-BJBEKbPz.js";import"./Hidden-pEOaXwqw.js";import"./Button-C-dIxopc.js";import"./useLabels-XOqJWlBh.js";import"./useButton-DTm3ZcYp.js";import"./useTextField-CiNPxm08.js";import"./useField-B4A4jkPa.js";import"./TextField.module-DjUItNl5.js";import"./Label-DEXn4ByM.js";import"./Dialog--8lqCXJk.js";import"./RSPContexts-Cfwtg70L.js";import"./OverlayArrow-BCGWgDXj.js";import"./useResizeObserver-CFbbsNlr.js";import"./Collection-PVK0oDXu.js";import"./index-3Baxujhg.js";import"./Separator-OOF5TOJZ.js";import"./PressResponder-Di5eSJ1F.js";import"./useLocalizedStringFormatter-CynvazlR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CXLCs3vd.js";import"./useLocalizedStringFormatter-BG94bp7r.js";import"./x-BK8pGwU2.js";import"./createLucideIcon-DKEO3zXH.js";import"./Heading-CWo00jhv.js";import"./info-DOsAf2VH.js";import"./Popover-DnQ6nZS9.js";import"./Tag-BB6DTqI3.js";import"./ListBox-D6-BC0-1.js";import"./DragAndDrop-DEURUxe_.js";import"./inertValue-BRjdHtZC.js";import"./useListState-4I4I2pa7.js";import"./useHighlightSelectionDescription-BDWb9LnA.js";import"./useUpdateEffect-DS4hGOXh.js";import"./useHasTabbableChild-Bvalvvtx.js";import"./check-OSSQzevc.js";import"./ListBoxSection-CprONeCZ.js";import"./Virtualizer-CcsjfPJ3.js";import"./useObserveElement-CwZ_TyGN.js";import"./chevron-down-BFTyZn0j.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-YxugeHYb.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
