import{j as n}from"./iframe-CJt1zD7T.js";import{$ as j}from"./Form-CzxJU4Cu.js";import{G}from"./Grid-DgLMJY5i.js";import{G as e}from"./GridItem-CKI1WO31.js";import{T as r}from"./TextField-DkDzzKOU.js";import{S as I}from"./Select-oWmHRNQx.js";import{B as a}from"./Button-5yZv9Hf_.js";import{R as g,a as b}from"./Radio-CQaftuim.js";import{C as h}from"./CheckboxGroup-B7itjOio.js";import{C as k}from"./Checkbox-C5djL0vr.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CWHeaD25.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-4eINhtLC.js";import"./useFocusRing-BBgFpgVl.js";import"./index-Bzh3_GpR.js";import"./index-DlMv9VaF.js";import"./TextFieldBase-BWh8OJZO.js";import"./TextField-CnBhYTip.js";import"./FieldError-CNxY3Y61.js";import"./Text-BgYOWvdz.js";import"./Text-DTE_ZvId.js";import"./Input-cnTyCpHc.js";import"./Hidden-CFoxTCtK.js";import"./Button-B5EAkOYM.js";import"./useLabels-C0_mYLvr.js";import"./useButton-D0vK5Bs7.js";import"./useTextField-BwMVTNFs.js";import"./useControlledState-C2utbRuj.js";import"./useField-CVTYhdOx.js";import"./TextField.module-BrIGiDQC.js";import"./Label-BUUU9JvE.js";import"./Dialog-DOglnf-T.js";import"./RSPContexts-BaaKE1nJ.js";import"./OverlayArrow-kq7LeBwu.js";import"./useResizeObserver-1KRg5ZEC.js";import"./Collection-BHK32Shj.js";import"./index-FXsaRDGM.js";import"./Separator-zY0kX7jv.js";import"./SelectionManager-KcAQnQDa.js";import"./useEvent-CLzYSiUG.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-XEzUR2qR.js";import"./useDescription-B5XRsvzI.js";import"./ListKeyboardDelegate-0t1BoBKT.js";import"./PressResponder-QVwqmOTm.js";import"./useLocalizedStringFormatter-Bq49MpUd.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-C2lkhbwg.js";import"./Dialog-CKHSutQJ.js";import"./useLocalizedStringFormatter-DuxiSHGw.js";import"./x-CzJ4WLkQ.js";import"./createLucideIcon-CSinTc4O.js";import"./Heading-ZMWUolBi.js";import"./info-DO7Wswn9.js";import"./Tag-B1FJszvM.js";import"./ListBox-DaLYaLKA.js";import"./DragAndDrop-Bss1eGjN.js";import"./inertValue-zGLFSkEU.js";import"./useListState-BUOFCjpI.js";import"./useHighlightSelectionDescription-59trNJvl.js";import"./useUpdateEffect-tsy15Zuk.js";import"./useHasTabbableChild-DmfzPw0A.js";import"./check-DdbU6mWI.js";import"./ListBoxSection-Bbxp2IeJ.js";import"./Virtualizer-COKXUfE4.js";import"./useObserveElement-CC4aYbXd.js";import"./chevron-down-DCNi1uTX.js";import"./Button.module-CF2bVDCq.js";import"./Group-C1dSmvXj.js";import"./useToggleState-BAK0ZaMy.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
