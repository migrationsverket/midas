import{j as n}from"./iframe-BerwrP6G.js";import{$ as j}from"./Form-D7hWjC0u.js";import{G}from"./Grid-DTCQ7APE.js";import{G as e}from"./GridItem-GYB15tum.js";import{T as r}from"./TextField-D2qiNwxW.js";import{S as I}from"./Select-Cs5Zy1z1.js";import{B as a}from"./Button-Bn_ItEEB.js";import{R as g,a as b}from"./Radio-Dr7DrNRH.js";import{C as h}from"./CheckboxGroup-CLqR2EzW.js";import{C as k}from"./Checkbox-B3HdLAWe.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BgmbhXo0.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B_osXHpF.js";import"./useFocusRing-Ctnq6p3W.js";import"./index-tBSi2WI_.js";import"./index-TJKzTg6r.js";import"./TextFieldBase-B88S5frV.js";import"./TextField-DxthrcCD.js";import"./FieldError-Drl0qtNM.js";import"./Text-BBq2t9XO.js";import"./Text-CwRGzFtW.js";import"./ListKeyboardDelegate-DOLoQFaM.js";import"./SelectionManager-x9XK9M76.js";import"./useEvent-zuHJP0k1.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Dk2gbXMe.js";import"./useDescription-BkDMgxBH.js";import"./useControlledState-BaDoyh-I.js";import"./Group-rwgkXEoM.js";import"./Input-DyRNKRJE.js";import"./Hidden-C5oyZPqt.js";import"./Button-ChgJrd1K.js";import"./useLabels-aqXW_PM3.js";import"./useButton-Dd7vKtfe.js";import"./useTextField-BXHVaWKL.js";import"./useField-CTxDEgeo.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-Dzl3z-fS.js";import"./Dialog-D-QxOShE.js";import"./RSPContexts-BsANX01Q.js";import"./OverlayArrow-iv7OMb2V.js";import"./useResizeObserver-CMa8hfc-.js";import"./Collection-DxZJaCNN.js";import"./index-CUYA1sjT.js";import"./Separator-BYB-Cwt_.js";import"./PressResponder-BOTsbYHC.js";import"./useLocalizedStringFormatter-SKpbqs-P.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CHo7M0ts.js";import"./Dialog-B4gbms91.js";import"./useLocalizedStringFormatter-DvFf3JtR.js";import"./x-DuiHKPsd.js";import"./createLucideIcon-CjHqynzm.js";import"./Heading-BU3K6H5Q.js";import"./info-BJzvYjCq.js";import"./Tag-BHFmlqwK.js";import"./ListBox-lBTa0oqr.js";import"./DragAndDrop-C4pPyfuK.js";import"./inertValue-C4ti8KRd.js";import"./useListState-Nm-xALml.js";import"./useHighlightSelectionDescription-DL6P9rjk.js";import"./useUpdateEffect-DIwAb2WP.js";import"./useHasTabbableChild-CjrexVJw.js";import"./check-PwNyFySj.js";import"./ListBoxSection-B6dhZ4DJ.js";import"./Virtualizer-S8XTy5o4.js";import"./useObserveElement-t1czMVIP.js";import"./chevron-down-CAdOWLqx.js";import"./Button.module-DWkXlqFG.js";import"./useToggleState-Dps1HJZo.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
