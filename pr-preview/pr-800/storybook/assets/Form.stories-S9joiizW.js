import{j as n}from"./iframe-BN391zBK.js";import{$ as j}from"./Form-D7TCgN58.js";import{G}from"./Grid-D4YKs_zt.js";import{G as e}from"./GridItem-CjbpItM8.js";import{T as r}from"./TextField-C_BwbPXE.js";import{S as I}from"./Select-BBGpsY8x.js";import{B as a}from"./Button-D6iiROU2.js";import{R as g,a as b}from"./Radio-DEsfPIiD.js";import{C as h}from"./CheckboxGroup-WGrpTuJw.js";import{C as k}from"./Checkbox-C5c9946R.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Bp6Jk10J.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BUSz2Coq.js";import"./useFocusRing-Cl65qai3.js";import"./index-m6YScWah.js";import"./index-DjoeDHlV.js";import"./TextFieldBase-DanydPCe.js";import"./TextField-CmZvoKGq.js";import"./FieldError-BCr-ZAco.js";import"./Text-DAir6v5f.js";import"./Text-BmLIpYZm.js";import"./ListKeyboardDelegate-BRm7CLqX.js";import"./SelectionManager-D4g17brf.js";import"./useEvent-C5PaGT2T.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CQHBmsMy.js";import"./useDescription-CYH5kg_g.js";import"./useControlledState-CT4ukCiY.js";import"./Group-BTRTQAZ1.js";import"./Input-aXRgn5iw.js";import"./Hidden-Bknn0RHi.js";import"./Button-CU8bTb-d.js";import"./useLabels-CWtmCjJH.js";import"./useButton-CRv-59N6.js";import"./useTextField-BnkmjXMV.js";import"./useField-BKzQGwkV.js";import"./TextField.module-DjUItNl5.js";import"./Label-kboUnzkV.js";import"./Dialog-QBntJVdU.js";import"./RSPContexts-BgX_TYmO.js";import"./OverlayArrow-Dqi9-Xay.js";import"./useResizeObserver-Btv3NizR.js";import"./Collection-BSkS_uZw.js";import"./index-QjkYpEvW.js";import"./Separator-BPT84Cop.js";import"./PressResponder-BYfcwY8i.js";import"./useLocalizedStringFormatter-GXB05Q-N.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DpQAVvph.js";import"./Dialog--G-6DrKd.js";import"./useLocalizedStringFormatter-CikDtIdS.js";import"./x-CPtnkpm5.js";import"./createLucideIcon-yySllbR8.js";import"./Heading-DUzYoNzQ.js";import"./info-DbXUsZa9.js";import"./Tag-Oa8Vl7sI.js";import"./ListBox-Do28j640.js";import"./DragAndDrop-s6baqfGZ.js";import"./inertValue-D0g09Dr0.js";import"./useListState-DJ4OAmoF.js";import"./useHighlightSelectionDescription-DmYjg75Q.js";import"./useUpdateEffect-CLfgyyog.js";import"./useHasTabbableChild-B0pFT0CK.js";import"./check-DGpkW7jg.js";import"./ListBoxSection-m0AV8bRh.js";import"./Virtualizer-CA5sScp6.js";import"./useObserveElement-Bq-J_whZ.js";import"./chevron-down-DpaYOwzU.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-C7RU5nzm.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
