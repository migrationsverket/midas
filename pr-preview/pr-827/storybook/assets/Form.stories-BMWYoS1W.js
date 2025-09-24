import{j as n}from"./iframe-DlClmN2I.js";import{$ as j}from"./Form-C2KOgTy9.js";import{G}from"./Grid-C847x_qg.js";import{G as e}from"./GridItem-xvGsJI_U.js";import{T as r}from"./TextField-C3cIG1Iw.js";import{S as I}from"./Select-BYzZ1CKI.js";import{B as a}from"./Button-CQa3GqXI.js";import{R as g,a as b}from"./Radio-CSpQaAf0.js";import{C as h}from"./CheckboxGroup-ubmvA7Jn.js";import{C as k}from"./Checkbox--MPJTuGh.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DaNsdxzL.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cm2pwwjw.js";import"./useFocusRing-D8gqILIU.js";import"./index-BruAsTTg.js";import"./index-pq7-Nor-.js";import"./TextFieldBase-CIFZj7lr.js";import"./TextField-BIseE63Z.js";import"./FieldError-w-rGGa2y.js";import"./Text-DZuapMZe.js";import"./Text-B3U-TqBl.js";import"./ListKeyboardDelegate-gZytd5dv.js";import"./SelectionManager-CYMKF7U4.js";import"./useEvent-CfV_GVeM.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-toDOeNzg.js";import"./useDescription-7PRFaWvq.js";import"./useControlledState-pc8YIYjN.js";import"./Group-g5kAc0sW.js";import"./Input-B2SFhPI6.js";import"./Hidden-Cd0C7fwR.js";import"./Button-DjVvc-Xq.js";import"./useLabels-Bx5Zd3Et.js";import"./useButton-B3bAeBAP.js";import"./useTextField-CqO76wNQ.js";import"./useField-G8fovyJ9.js";import"./TextField.module-DjUItNl5.js";import"./Label-C7i98P2d.js";import"./Dialog-CkebA1Ag.js";import"./RSPContexts-PCs9qm_a.js";import"./OverlayArrow-DblJC4wn.js";import"./useResizeObserver-BgB5-wa2.js";import"./Collection-BcKaMJpM.js";import"./index-3FfftHYd.js";import"./Separator-cMCs3JAC.js";import"./PressResponder-C5RYXGaS.js";import"./useLocalizedStringFormatter-DYfCpasT.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-B2JeLUwN.js";import"./Dialog-BqFmaIXG.js";import"./useLocalizedStringFormatter-BUyhAksf.js";import"./x-C1IaaiSS.js";import"./createLucideIcon-BcWAzyzy.js";import"./Heading-D7vnDoVp.js";import"./info-CB9MVKLT.js";import"./Tag-I0OYAkiw.js";import"./ListBox-ecwmRF6F.js";import"./DragAndDrop-BQRiMYw1.js";import"./inertValue-CUpC0Qtq.js";import"./useListState-7KoVPHJC.js";import"./useHighlightSelectionDescription-BQ1aIjlY.js";import"./useUpdateEffect-G-Qag1Fi.js";import"./useHasTabbableChild-BLVUayeg.js";import"./check-C4tLi010.js";import"./ListBoxSection-vsxPXVlq.js";import"./Virtualizer-C7mLDrY5.js";import"./useObserveElement-Cz2reB9M.js";import"./chevron-down-DAB3lpZ6.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BcWChsn0.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
