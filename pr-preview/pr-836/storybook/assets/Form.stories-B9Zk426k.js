import{j as n}from"./iframe-BJVcPA_s.js";import{$ as j}from"./Form-B7QvlVVc.js";import{G}from"./Grid-ChZM7M9i.js";import{G as e}from"./GridItem-Ihu16dl7.js";import{T as r}from"./TextField-Dlf-OBXQ.js";import{S as I}from"./Select-DUpVmJ7J.js";import{B as a}from"./Button-CLXoMrQg.js";import{R as g,a as b}from"./Radio-Bu9xCxb-.js";import{C as h}from"./CheckboxGroup-jW724ZYY.js";import{C as k}from"./Checkbox-ud1cn3u7.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Bunfn0tV.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Be_Waraa.js";import"./useFocusRing-Wxkxjqut.js";import"./index-BYijIuPR.js";import"./index-D_uYC4ys.js";import"./TextFieldBase-C-GDfG7q.js";import"./TextField-CtZdxBN5.js";import"./FieldError-BMusWWJ0.js";import"./Text-RAx2kKy5.js";import"./Text-Bn3LVuGj.js";import"./ListKeyboardDelegate-BsVP-wGH.js";import"./SelectionManager-DpnP9IRj.js";import"./useEvent-YKPelCbB.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BZaXNKy2.js";import"./useDescription-Bn58eQ3q.js";import"./useControlledState-C13z05PR.js";import"./Group-BnjMaAVu.js";import"./Input-DVVDnZgo.js";import"./Hidden-IMPDPIgy.js";import"./Button-CrxaIQHr.js";import"./useLabels-CIXekkOo.js";import"./useButton-BOT-mYKa.js";import"./useTextField-DfeZ0eFH.js";import"./useField-CFaUlU9U.js";import"./TextField.module-DjUItNl5.js";import"./Label-BQlRJZUD.js";import"./Dialog-oNndWIOz.js";import"./RSPContexts-D1GL4Hr2.js";import"./OverlayArrow-DrQgwTgt.js";import"./useResizeObserver-BA4ARUQk.js";import"./Collection-CjhAMueu.js";import"./index-Csueesh4.js";import"./Separator-J0f9SNR5.js";import"./PressResponder-fQBLXrH1.js";import"./useLocalizedStringFormatter-BC9IP8iU.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DazzpiNl.js";import"./Dialog-r93fsloK.js";import"./useLocalizedStringFormatter-BqG6RLL8.js";import"./x-BJs1gpL6.js";import"./createLucideIcon-7KXRseZf.js";import"./Heading-CS-tIkm9.js";import"./info-CI-D5lMt.js";import"./Tag-wxEsgbbD.js";import"./ListBox-3tBQkcL3.js";import"./DragAndDrop-DGBnO2jx.js";import"./inertValue-D1BKQ0LY.js";import"./useListState-CrYgXZd_.js";import"./useHighlightSelectionDescription-DUElxPC2.js";import"./useUpdateEffect-V6_eQBFC.js";import"./useHasTabbableChild-TM22FkFB.js";import"./check-BeYh2Bct.js";import"./ListBoxSection-BZ6N-hic.js";import"./Virtualizer-m4F4pJHz.js";import"./useObserveElement-DoZtVulZ.js";import"./chevron-down-C1fLzeMB.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-D0MPSUEL.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
