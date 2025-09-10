import{j as n}from"./iframe-mqWe_uSh.js";import{$ as j}from"./Form-BuxkmbbU.js";import{G}from"./Grid-Csln6LFn.js";import{G as e}from"./GridItem-DQG-N1f8.js";import{T as r}from"./TextField-CmuhmkGU.js";import{S as I}from"./Select-DVWHPouI.js";import{B as a}from"./Button-ZnSJWUJ5.js";import{R as g,a as b}from"./Radio-JpcGq2ke.js";import{C as h}from"./CheckboxGroup-C2IG9vD5.js";import{C as k}from"./Checkbox-Bhs8lodx.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-s8-YqPF-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BwmzQs1K.js";import"./useFocusRing-CQ-r3wmE.js";import"./index-DbaAV4O9.js";import"./index-C3uUrFM9.js";import"./TextFieldBase-BFi77F6o.js";import"./TextField-CcLclI61.js";import"./FieldError-Swy_EoC6.js";import"./Text-D7HzQKX_.js";import"./Text-qmXQ-b-X.js";import"./ListKeyboardDelegate-SJ8NGd1l.js";import"./SelectionManager-XwxFzpIb.js";import"./useEvent-DYKF1NJq.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BRVjls5e.js";import"./useDescription-b8QQelVB.js";import"./useControlledState-mCdGEXE3.js";import"./Group-zxe1Hl4H.js";import"./Input-Dcf75fWt.js";import"./Hidden-BTwMoy9l.js";import"./Button-CSdKv0Hf.js";import"./useLabels-C3mf8CBp.js";import"./useButton-_mACns3D.js";import"./useTextField-b3DhehTh.js";import"./useField-CCFNlSCc.js";import"./TextField.module-8oYDuXgF.js";import"./Label-61Ls_dD-.js";import"./Dialog-ScdbmlJm.js";import"./RSPContexts-AoTvJxud.js";import"./OverlayArrow-SslZquVV.js";import"./useResizeObserver-Da0q-uDp.js";import"./Collection-6rFrdi2D.js";import"./index-Bj2492Q-.js";import"./Separator-D5IttSUL.js";import"./PressResponder-DXXvS_uv.js";import"./useLocalizedStringFormatter-CptJGS18.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CnLLbS1P.js";import"./Dialog-DOMZmeqP.js";import"./useLocalizedStringFormatter-BAVvUYee.js";import"./x-D-ooVVAL.js";import"./createLucideIcon-B2CthfMB.js";import"./Heading-lB7ODI4o.js";import"./info-BL5De88S.js";import"./Tag-D365zX4x.js";import"./ListBox-C6bnalZk.js";import"./DragAndDrop-Yyd3-QDP.js";import"./inertValue-BwFhx_5J.js";import"./useListState-fxVRDP16.js";import"./useHighlightSelectionDescription-Bp-juVeA.js";import"./useUpdateEffect-BWFDCeaS.js";import"./useHasTabbableChild-DWQbnzS8.js";import"./check-9KWEkhPt.js";import"./ListBoxSection-CRnDOB4Y.js";import"./Virtualizer-Ba3IGgSN.js";import"./useObserveElement-L8NiE7Xi.js";import"./chevron-down-BgGs9V1v.js";import"./Button.module-GuOSDIYz.js";import"./useToggleState-21ersvMX.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
