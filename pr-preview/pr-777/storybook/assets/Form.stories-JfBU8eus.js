import{j as n}from"./iframe-CZTz_1Ss.js";import{$ as j}from"./Form-CrpEr4Xg.js";import{G}from"./Grid-BUwCd2FD.js";import{G as e}from"./GridItem-CIS-3XHr.js";import{T as r}from"./TextField-BVa3QQUv.js";import{S as I}from"./Select-C2Xks739.js";import{B as a}from"./Button-C7H_IVjg.js";import{R as g,a as b}from"./Radio-ue8SH3Rt.js";import{C as h}from"./CheckboxGroup-BWLF3XP1.js";import{C as k}from"./Checkbox-CNqSpVo1.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Czv0ekEp.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CylHJRWZ.js";import"./useFocusRing-BeglxJnX.js";import"./index-DdMPlnP1.js";import"./index-BYK-P1_i.js";import"./TextFieldBase-D1Eq530r.js";import"./TextField-BVgQl-dV.js";import"./FieldError-DBJsxgT8.js";import"./Text-D54xrsa6.js";import"./Text-Di-x-XQT.js";import"./ListKeyboardDelegate-DNVCaawC.js";import"./SelectionManager-CZcaqQtV.js";import"./useEvent-Bjr7uHPn.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-D5A2-nwI.js";import"./useDescription-CrSd7uUI.js";import"./useControlledState-CxnzXe5l.js";import"./Group-CoRCsbb2.js";import"./Input-BGBEhKQW.js";import"./Hidden-CF862YW5.js";import"./Button-C0F6uup8.js";import"./useLabels-YuoZjkd4.js";import"./useButton-C_3zQ4QZ.js";import"./useTextField-HlT3R52h.js";import"./useField-D4jWCsHU.js";import"./TextField.module-BrIGiDQC.js";import"./Label-yRtyfF7s.js";import"./Dialog-Djg_omXT.js";import"./RSPContexts-BJulGrv2.js";import"./OverlayArrow-DKK5LLw4.js";import"./useResizeObserver-fPCn4UD6.js";import"./Collection-BZsZhDEZ.js";import"./index-BluPVW7f.js";import"./Separator-D3lNFJrs.js";import"./PressResponder-DUnZAfTG.js";import"./useLocalizedStringFormatter-DHEBIave.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-tTX2R0A3.js";import"./Dialog-CYoEloVv.js";import"./useLocalizedStringFormatter-D2QsF33r.js";import"./x-vFIiTt-x.js";import"./createLucideIcon-DAO-sk59.js";import"./Heading-DKJ6r1HS.js";import"./info-B3-CM6uD.js";import"./Tag-TSfhWwvH.js";import"./ListBox-UrMUyhkX.js";import"./DragAndDrop-EolQEX6B.js";import"./inertValue-Dsm277dc.js";import"./useListState-DrMLDa-F.js";import"./useHighlightSelectionDescription-DVjsdo_g.js";import"./useUpdateEffect-CSUdzMja.js";import"./useHasTabbableChild-CbsmQqyW.js";import"./check-DI7-ildu.js";import"./ListBoxSection-DueRtClE.js";import"./Virtualizer-CyDS3RT-.js";import"./useObserveElement-CGecmt5U.js";import"./chevron-down-C2U8_7xx.js";import"./Button.module-CF2bVDCq.js";import"./useToggleState-BR91GXmZ.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
