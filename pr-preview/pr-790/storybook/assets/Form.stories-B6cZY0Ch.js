import{j as n}from"./iframe-DnI-QKbS.js";import{$ as j}from"./Form-Cg25hXdo.js";import{G}from"./Grid-DgdLhtdi.js";import{G as e}from"./GridItem-ekAEA_ms.js";import{T as r}from"./TextField-D8s8_8df.js";import{S as I}from"./Select-DGt1h8rV.js";import{B as a}from"./Button-UIQQGwLE.js";import{R as g,a as b}from"./Radio-ztsF_ZNg.js";import{C as h}from"./CheckboxGroup-w5ch8jMV.js";import{C as k}from"./Checkbox-CoTr486_.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-jRaMmY8n.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B9BICwzH.js";import"./useFocusRing-wycQuoRu.js";import"./index-D82oNEbF.js";import"./index-BbRr_N3Y.js";import"./TextFieldBase-B37dbHLV.js";import"./TextField-D8CiQHdr.js";import"./FieldError-Ek6Zj48h.js";import"./Text-YNvCfLHr.js";import"./Text-tGfqaEU0.js";import"./ListKeyboardDelegate-Dp3gjU-Q.js";import"./SelectionManager-CQPlqOy5.js";import"./useEvent-CSxKpqvk.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-8W4p0Ww6.js";import"./useDescription-C8QPUKpY.js";import"./useControlledState-BMgCKjyf.js";import"./Group-B5buseRd.js";import"./Input-CRnrDpNw.js";import"./Hidden-BmAJEf2m.js";import"./Button-PR9lUSrP.js";import"./useLabels-B28QLeVn.js";import"./useButton-CvBOhAwP.js";import"./useTextField-D_5mN_YO.js";import"./useField-CWfe1gHR.js";import"./TextField.module-8oYDuXgF.js";import"./Label-CYY8PvIN.js";import"./Dialog-DM6BnbtA.js";import"./RSPContexts-CAa9h1GK.js";import"./OverlayArrow-c55ulaji.js";import"./useResizeObserver-CpqNDg_A.js";import"./Collection-cK-LQI_t.js";import"./index-DKgCW7T6.js";import"./Separator-llETwDWq.js";import"./PressResponder-BZa6AwoC.js";import"./useLocalizedStringFormatter-DSAfbMP1.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BPHSdy4Y.js";import"./Dialog-CODaKAc8.js";import"./useLocalizedStringFormatter-B9afcy0C.js";import"./x-B3mCuLar.js";import"./createLucideIcon-DRwI5X3r.js";import"./Heading-ZwUxRJsC.js";import"./info-DBOKCR7A.js";import"./Tag-_ruguAG0.js";import"./ListBox-BN7dzO0y.js";import"./DragAndDrop-B471gwhQ.js";import"./inertValue-B4wkeBlR.js";import"./useListState-Dwd8zM_n.js";import"./useHighlightSelectionDescription-B163Upob.js";import"./useUpdateEffect-E-lA4dUW.js";import"./useHasTabbableChild-CAYV4d6N.js";import"./check-8TCGa1Kx.js";import"./ListBoxSection-yLC8h-QE.js";import"./Virtualizer-DfWbHOYx.js";import"./useObserveElement-BS-Cyc1t.js";import"./chevron-down-ezFvrTvJ.js";import"./Button.module-GuOSDIYz.js";import"./useToggleState-CTQryPSZ.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
