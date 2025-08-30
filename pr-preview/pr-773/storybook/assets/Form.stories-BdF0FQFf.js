import{j as n}from"./iframe-Cr-HqwO2.js";import{$ as j}from"./Form-C3cIlFA3.js";import{G}from"./Grid-DarjfW_S.js";import{G as e}from"./GridItem-D__YRmcX.js";import{T as r}from"./TextField-DQq9Q5EY.js";import{S as I}from"./Select-B_PrMwPr.js";import{B as a}from"./Button-CGa2Wy7h.js";import{R as g,a as b}from"./Radio-B6sd6Fvi.js";import{C as h}from"./CheckboxGroup-DTkBooRA.js";import{C as k}from"./Checkbox-l8FfUBTL.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DunCwgIN.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CRGr-oTy.js";import"./useFocusRing-BvU4KTmD.js";import"./index-BfXV4gGa.js";import"./index-Cj8P_h0C.js";import"./TextFieldBase-Dim4fDyp.js";import"./TextField-D2QIMN8K.js";import"./FieldError-D89dmcr6.js";import"./Text-DEKdqfsr.js";import"./Text-D_8rMcc4.js";import"./Input-BaLZB3CB.js";import"./Hidden-CCabII1s.js";import"./Button-Bgevckt5.js";import"./useLabels-B29PcoQb.js";import"./useButton-DK_BF2gl.js";import"./useTextField-CaI1cdfU.js";import"./useControlledState-CprlOB-c.js";import"./useField-CQ1pHz15.js";import"./TextField.module-BrIGiDQC.js";import"./Label-VOJFLLcZ.js";import"./Dialog-BV09Upo6.js";import"./RSPContexts-DtcmmrV6.js";import"./OverlayArrow-B5lJ8OBz.js";import"./useResizeObserver-CIBW-Cuo.js";import"./Collection-C3k1BNIq.js";import"./index-BPgwRSk5.js";import"./Separator-FJHxyE32.js";import"./SelectionManager-9C2Cdiir.js";import"./useEvent-C3903aO2.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CJVGIz6A.js";import"./useDescription-DbW203nB.js";import"./ListKeyboardDelegate-DCjhrAZ4.js";import"./PressResponder-CIlbkbjv.js";import"./useLocalizedStringFormatter-CC7fDEUR.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BY0mRwWu.js";import"./Dialog-CQUYZ74i.js";import"./useLocalizedStringFormatter-BaDH7jDu.js";import"./x-xQRbJG35.js";import"./createLucideIcon-if3V4LDX.js";import"./Heading-DzhVkT38.js";import"./info-CjMTJq5F.js";import"./Tag-B1UI4hGc.js";import"./ListBox-D8b3F1Y2.js";import"./DragAndDrop-tns8CJP-.js";import"./inertValue-B6btWTAC.js";import"./useListState-T7jV7RZd.js";import"./useHighlightSelectionDescription-BXdWeumM.js";import"./useUpdateEffect-Cr9I7o1S.js";import"./useHasTabbableChild-BPmtUb0Q.js";import"./check-CZxWSIZT.js";import"./ListBoxSection-Bc_bVEfw.js";import"./Virtualizer-DUpch1Sa.js";import"./useObserveElement-CrYl4Kxe.js";import"./chevron-down-DCkpbESf.js";import"./Button.module-CF2bVDCq.js";import"./Group-CmaMQjkE.js";import"./useToggleState-B_Un6DT7.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
