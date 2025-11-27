import{j as e}from"./iframe-krU3lnll.js";import{$ as c}from"./Form-DF--Q7sV.js";import{G as d}from"./Grid-Cc6EkkMl.js";import{G as i}from"./GridItem-BdL6SiSG.js";import{T as t}from"./TextField-CelEnYDD.js";import{S as l}from"./Select-DFxLG8Vo.js";import{B as a}from"./Button-C-0GV_cb.js";import{R as x,a as u}from"./Radio-onpKQXua.js";import{C as I}from"./CheckboxGroup-BpcQXT45.js";import{C as G}from"./Checkbox-B6FDwXRS.js";import{L as p}from"./ListBoxItem-DVYA0prn.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DnS0_qQ0.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D2kRzjUH.js";import"./useFocusRing-CWzVObSZ.js";import"./index-C3RV6eBu.js";import"./index-VFJCran0.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-B0HQ3j9s.js";import"./TextField-Caa72vSQ.js";import"./FieldError-BZw0hilX.js";import"./Text-DbFNQrMd.js";import"./Text-CRDp8VCP.js";import"./RSPContexts-CK5__bLT.js";import"./Group-BAt37hnW.js";import"./Input-WpgHyu-H.js";import"./Hidden-VnIe4cgE.js";import"./Button-BU6Lkb_Z.js";import"./useLabels-CUZsRNLj.js";import"./useButton-D0AxcNmg.js";import"./useTextField-CQh1ecGs.js";import"./useControlledState-BaSC3gVY.js";import"./useField-D2HtNlVL.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-DCWCy9Nd.js";import"./Dialog-Dl6ULBTo.js";import"./OverlayArrow-DZYqRZ0L.js";import"./useResizeObserver-BZbGIQoB.js";import"./Collection-SMI5ud3S.js";import"./index-BI9wnSMS.js";import"./Separator-Z9cKJYqT.js";import"./SelectionManager-1YUjXvJB.js";import"./useEvent-DlIKZhAG.js";import"./scrollIntoView-DmSwjTPb.js";import"./SelectionIndicator-CDrcvIKn.js";import"./useDescription-BPn6lxFJ.js";import"./ListKeyboardDelegate-DG_DvB0T.js";import"./PressResponder-jZ7-PsE5.js";import"./useLocalizedStringFormatter-DZ80bzWS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DN-of50m.js";import"./VisuallyHidden-C3s2Crnt.js";import"./x-C81gg8f4.js";import"./createLucideIcon-DPakKbXd.js";import"./useLocalizedStringFormatter-B3TpQ19y.js";import"./Heading-CWDBVfdi.js";import"./info-P1AvIU-w.js";import"./Popover-Cq24sl41.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-FKC-RE9v.js";import"./DragAndDrop-D08xt5F_.js";import"./inertValue-FxKv7iF2.js";import"./useListState-D0gcoiF9.js";import"./Tag-0OrX3YZ-.js";import"./useHighlightSelectionDescription-BdS3voLD.js";import"./useUpdateEffect-DsQQ3g0P.js";import"./useHasTabbableChild-B2N9qPfL.js";import"./chevron-down-BTJg8wmC.js";import"./Button.module-CtQ1deO8.js";import"./check-ByYlxscW.js";import"./useToggleState-DmGXIFA4.js";import"./Virtualizer-Bgw1TzDz.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
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
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
