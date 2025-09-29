import{j as n}from"./iframe-kMiknBC6.js";import{$ as j}from"./Form-C6gpgkxt.js";import{G}from"./Grid-BYiJ8GqN.js";import{G as e}from"./GridItem-BYSeuHGB.js";import{T as r}from"./TextField-COVBnGMg.js";import{S as I}from"./Select-DB__NBp8.js";import{B as a}from"./Button-CafKZZUh.js";import{R as g,a as b}from"./Radio-D1jGbtw5.js";import{C as h}from"./CheckboxGroup-DqJeoYlP.js";import{C as k}from"./Checkbox-CcPXC6h3.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-s8mL8uTY.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DdSSvhP1.js";import"./useFocusRing-BY5A72sR.js";import"./index-D9HDOR5h.js";import"./index-7kcFapoJ.js";import"./TextFieldBase-C5qc7ybk.js";import"./TextField-8cNlPk5o.js";import"./FieldError-CKa-9ToV.js";import"./Text-BFay74Hc.js";import"./Text-B8K_qT9a.js";import"./context-CZKrlXan.js";import"./SelectionManager-B94FVNls.js";import"./useEvent-BqMjVULP.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-D9rN8LWv.js";import"./useDescription-BB3NlvVi.js";import"./useControlledState-sRsSmndr.js";import"./Group-DaTXtrIU.js";import"./Input-CdI-mBYX.js";import"./Hidden-j1TTdwqM.js";import"./Button-C8N6PLYK.js";import"./useLabels-FtQppIax.js";import"./useButton-CudOwWW-.js";import"./useTextField-DJE8vUNo.js";import"./useField-DS83mhDo.js";import"./TextField.module-DjUItNl5.js";import"./Label-GTugcrx3.js";import"./Dialog-B3eDMbqI.js";import"./RSPContexts-C89JCrx_.js";import"./OverlayArrow-DiRtA2RC.js";import"./useResizeObserver-GxSWk-nH.js";import"./Collection-D36ANUYx.js";import"./index-C3NMqKkD.js";import"./Separator-iuK5bHK7.js";import"./PressResponder-MpaqFaZE.js";import"./useLocalizedStringFormatter-D3_H7fpb.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BtkyZ7wt.js";import"./useLocalizedStringFormatter-BuCcM5s5.js";import"./x-agcOxfko.js";import"./createLucideIcon-CC-uhS2x.js";import"./Heading-C5qt3E_c.js";import"./info-DDj0yK8f.js";import"./Popover-CuQ5zWwN.js";import"./Tag-PBzKNsyl.js";import"./ListBox-DXD3B10A.js";import"./DragAndDrop-DeCTLQWB.js";import"./inertValue-D2ckDrQj.js";import"./useListState-DVTmr58j.js";import"./useHighlightSelectionDescription-D0qCI745.js";import"./useUpdateEffect-qZG5B1YC.js";import"./useHasTabbableChild-DDbytNml.js";import"./check-5BYIGTfj.js";import"./ListBoxSection-CBdwI5xv.js";import"./Virtualizer-fCYG8YgC.js";import"./useObserveElement-Ct3Jt23B.js";import"./chevron-down-yT4gPLB7.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DsiE4MO-.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
