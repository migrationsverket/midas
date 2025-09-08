import{j as n}from"./iframe-4lK7fKbc.js";import{$ as j}from"./Form-CUKT1BLh.js";import{G}from"./Grid-BsXG7rTF.js";import{G as e}from"./GridItem-CA5CuAck.js";import{T as r}from"./TextField-Bf5_qvgx.js";import{S as I}from"./Select-DgO-PVq-.js";import{B as a}from"./Button-3ItS0WQJ.js";import{R as g,a as b}from"./Radio-C4JbrOmA.js";import{C as h}from"./CheckboxGroup-DRhRZEqD.js";import{C as k}from"./Checkbox-D-SfjGFG.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DJ7OK7G4.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-nbdHmfQN.js";import"./useFocusRing-DO1kNn5x.js";import"./index-qpZMIXjh.js";import"./index-CeWqQAzY.js";import"./TextFieldBase-CvqG1bYE.js";import"./TextField-DnqkErjh.js";import"./FieldError-BtsoD2Dc.js";import"./Text-BeWFx65J.js";import"./Text-Bzq96XoC.js";import"./ListKeyboardDelegate-Cv_LJbqB.js";import"./SelectionManager-Bf_jJkfc.js";import"./useEvent-xZSZg_wR.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DaeYGdnQ.js";import"./useDescription-g1A33IWZ.js";import"./useControlledState-QAr2oF8_.js";import"./Group-0eLOX91t.js";import"./Input-CKMc0koj.js";import"./Hidden-14l61M_L.js";import"./Button-rxVkz01D.js";import"./useLabels-B04JfF0b.js";import"./useButton-DnXqC7uB.js";import"./useTextField-9_adVBG-.js";import"./useField-BfyxUDMR.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-Cpu_pKKv.js";import"./Dialog-pU-kI3eF.js";import"./RSPContexts-C6urQgaY.js";import"./OverlayArrow-UX72qDRO.js";import"./useResizeObserver-BL5o3THn.js";import"./Collection-CwUMe2fu.js";import"./index-D_CPdy3R.js";import"./Separator-ClmGOZK9.js";import"./PressResponder-V5uupNdk.js";import"./useLocalizedStringFormatter-Nfv8S4TX.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-FtBzI4n4.js";import"./Dialog-eaBLChlO.js";import"./useLocalizedStringFormatter-C_fjP7vE.js";import"./x-CS_TqCWL.js";import"./createLucideIcon-Bjyle2Lq.js";import"./Heading-CFYIjUG7.js";import"./info-P18QjoR_.js";import"./Tag-nwtlKABf.js";import"./ListBox-gxVsYfJS.js";import"./DragAndDrop-C4p9WI0z.js";import"./inertValue-gQEA7S1E.js";import"./useListState-DqFUL7HA.js";import"./useHighlightSelectionDescription-DKWYF-Dv.js";import"./useUpdateEffect-Dhr9LOT7.js";import"./useHasTabbableChild-rfipq-JE.js";import"./check-Ca4R9B6b.js";import"./ListBoxSection-CXG94wnd.js";import"./Virtualizer-BCjq7218.js";import"./useObserveElement-6Gxih6_H.js";import"./chevron-down-B6-oZndM.js";import"./Button.module-DgYkWG2o.js";import"./useToggleState-DhmK4cIr.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
