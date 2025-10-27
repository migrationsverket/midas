import{j as n}from"./iframe-odwdLjhJ.js";import{$ as j}from"./Form-WVETeLgZ.js";import{G}from"./Grid-CjaAPdTq.js";import{G as e}from"./GridItem-BC-5Kx3J.js";import{T as r}from"./TextField-CMmZK12L.js";import{S as I}from"./Select-KQl9u6O8.js";import{B as a}from"./Button-DUkfVRlk.js";import{R as g,a as b}from"./Radio-Cd9gj8dJ.js";import{C as h}from"./CheckboxGroup-ohmW4KPT.js";import{C as k}from"./Checkbox-BivswT3R.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BfXlgJWI.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DqnNYfez.js";import"./useFocusRing-D_0n3iry.js";import"./index-gUgSV9Od.js";import"./index-Y-mQe5FE.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-wj2Nroke.js";import"./TextField-D-0CRexk.js";import"./FieldError-DM2aQdrw.js";import"./Text-D1-v39j4.js";import"./Text-Bc8jy4b7.js";import"./RSPContexts-CU7vv0tP.js";import"./Group-QD2CEpU4.js";import"./Input-BwwHtIHA.js";import"./Hidden-f5i2DQHq.js";import"./Button-CHIcEKTW.js";import"./useLabels-Co1S2KyV.js";import"./useButton-BxE9BcYr.js";import"./useTextField-Xyn3yYLY.js";import"./useControlledState-fx81Le39.js";import"./useField-CHm8F9NL.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-CjKUqSZU.js";import"./Dialog-CNJSsRcs.js";import"./OverlayArrow-BJUOFPmC.js";import"./useResizeObserver-IHOSW5AJ.js";import"./Collection-Castb3qJ.js";import"./index-5o94CGW_.js";import"./Separator-CTTTZ56T.js";import"./SelectionManager-rKa6E0TN.js";import"./useEvent-CCjyJx7k.js";import"./scrollIntoView-Bx0r-2kp.js";import"./SelectionIndicator-DXCDOo7y.js";import"./useDescription-Imkgoqqx.js";import"./ListKeyboardDelegate-BY0iTWI6.js";import"./PressResponder-DlvMD2kq.js";import"./useLocalizedStringFormatter-DcZOaAjj.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-SThPPMwY.js";import"./VisuallyHidden-Cg-saB8v.js";import"./useLocalizedStringFormatter-Czwx8J6G.js";import"./x-ByXAbeVe.js";import"./createLucideIcon-DT6ESbmV.js";import"./Heading-BAN08N4A.js";import"./info-PHroukmQ.js";import"./Popover-CBbH-QV4.js";import"./Tag-IX95m38K.js";import"./ListBox-D4su9LZ0.js";import"./DragAndDrop-ChTph38Y.js";import"./inertValue-Df7fHeNT.js";import"./useListState-C4ixAA-z.js";import"./useHighlightSelectionDescription-z99PQfoL.js";import"./useUpdateEffect-BZ02Qhv2.js";import"./useHasTabbableChild-CiWuwUqh.js";import"./check-hxjMcmUd.js";import"./ListBoxSection-szWs9jQj.js";import"./Virtualizer-D2_Pl-Tw.js";import"./chevron-down-CVzwb29c.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-BZuaIU-Y.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
