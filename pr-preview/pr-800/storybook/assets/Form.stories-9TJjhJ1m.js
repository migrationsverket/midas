import{j as n}from"./iframe-CAvVc_IC.js";import{$ as j}from"./Form-w2Yb-IOe.js";import{G}from"./Grid-BY7E1CJk.js";import{G as e}from"./GridItem-DgEJfm5w.js";import{T as r}from"./TextField-CPvGVUqL.js";import{S as I}from"./Select-BbCc0YYj.js";import{B as a}from"./Button-BCUZwIJm.js";import{R as g,a as b}from"./Radio-DyfX3xwy.js";import{C as h}from"./CheckboxGroup-DHMdC4v_.js";import{C as k}from"./Checkbox-CZrbRbkE.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CWFeFJ0_.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CJeKfSfW.js";import"./useFocusRing-DUaqGxPK.js";import"./index-DH357gdo.js";import"./index-CfAwoNHB.js";import"./TextFieldBase-BBU9XAB2.js";import"./TextField-B7XUMktg.js";import"./FieldError-C9HWv4T8.js";import"./Text-CRxShYXI.js";import"./Text-D6q7BSoi.js";import"./ListKeyboardDelegate-kpPlHEM9.js";import"./SelectionManager-DM-kliGL.js";import"./useEvent-BxH0nKIT.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-C8KaGDIn.js";import"./useDescription-DGokbRMp.js";import"./useControlledState-Um831eMi.js";import"./Group-BugIkft5.js";import"./Input-DG_M6ULQ.js";import"./Hidden-B_kS6b7l.js";import"./Button-Cxq2HaPj.js";import"./useLabels-CMfJIBTF.js";import"./useButton-DFks96e5.js";import"./useTextField-aLevqli5.js";import"./useField-CFgMTq7a.js";import"./TextField.module-DjUItNl5.js";import"./Label-CSYEzupv.js";import"./Dialog-BxZbGz76.js";import"./RSPContexts-CKu6_IrT.js";import"./OverlayArrow-99ASjtyD.js";import"./useResizeObserver-BSIy6MMg.js";import"./Collection-CGWDLeM-.js";import"./index-CIiAYzwt.js";import"./Separator-C7lQxreN.js";import"./PressResponder-BeuBQbOC.js";import"./useLocalizedStringFormatter-O0Pt4NhT.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BI0usIgX.js";import"./Dialog-0uwfIA_m.js";import"./useLocalizedStringFormatter-3m8X8O_W.js";import"./x-BS8jF5UB.js";import"./createLucideIcon-BhNK69GC.js";import"./Heading-BRJfu8Wx.js";import"./info-B_a1RQph.js";import"./Tag-DISVXY7w.js";import"./ListBox-HJygICmV.js";import"./DragAndDrop-BPRf-Ft1.js";import"./inertValue--oHxnpXL.js";import"./useListState-BET3ddLf.js";import"./useHighlightSelectionDescription-DTnTMiW5.js";import"./useUpdateEffect-DR6O_aMN.js";import"./useHasTabbableChild-rJgnjVfX.js";import"./check-CPxjVy88.js";import"./ListBoxSection-CtGgzrq-.js";import"./Virtualizer-21KSQ6AJ.js";import"./useObserveElement-uS6LVkxq.js";import"./chevron-down-YBp0n9MJ.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DzPMxxCK.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
