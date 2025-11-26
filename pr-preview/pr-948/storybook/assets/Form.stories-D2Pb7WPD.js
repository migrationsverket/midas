import{j as e}from"./iframe-BFAT86ge.js";import{$ as c}from"./Form-D2r3omc4.js";import{G as d}from"./Grid-BnY_UARF.js";import{G as i}from"./GridItem-NVaDfaNq.js";import{T as t}from"./TextField-ZgGOxqMI.js";import{S as l}from"./Select-Dh4-Jwh0.js";import{B as a}from"./Button-D7VV456q.js";import{R as x,a as u}from"./Radio-CqDur3LO.js";import{C as I}from"./CheckboxGroup-DfL4ge2O.js";import{C as G}from"./Checkbox-l3wjhXJo.js";import{L as p}from"./ListBoxItem-CWR3pU01.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Ba9aKAk3.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C2NZitLO.js";import"./useFocusRing-DMrOFPKB.js";import"./index-BFncSmEm.js";import"./index-frs3Q4tr.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BLEw2fuz.js";import"./TextField-CYNLVTBS.js";import"./FieldError-D620tWPG.js";import"./Text-ZCo5zKuv.js";import"./Text-DuhPYjo1.js";import"./RSPContexts-BYWA1x4J.js";import"./Group-BI-qvtT1.js";import"./Input-BmvtXt0I.js";import"./Hidden-eduYOiEE.js";import"./Button-DLAy5IOQ.js";import"./useLabels-C6lMhNDy.js";import"./useButton-B3TVvISn.js";import"./useTextField-B5lblK7e.js";import"./useControlledState-CkPmYDR8.js";import"./useField-BiZ-hB8h.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-kdwunqNb.js";import"./Dialog-PUDk5BYI.js";import"./OverlayArrow-BGApCK5D.js";import"./useResizeObserver-B7UpDBay.js";import"./Collection-BiYgrWvW.js";import"./index-B1FZUAB2.js";import"./Separator-Dhh2VqBs.js";import"./SelectionManager-DlsLVDHq.js";import"./useEvent-CnO47SCe.js";import"./scrollIntoView-BSaH7Nmd.js";import"./SelectionIndicator-D0NQfIHj.js";import"./useDescription-Cc9k7uL8.js";import"./ListKeyboardDelegate-CvV3oALN.js";import"./PressResponder-C6_AVyjI.js";import"./useLocalizedStringFormatter-EcwRZ9Dr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CsKOuMBX.js";import"./VisuallyHidden-CyAMcSTC.js";import"./x-Chk2rlLw.js";import"./createLucideIcon-DcKvq49U.js";import"./useLocalizedStringFormatter-D_c5jWec.js";import"./Heading-BPJd7_5o.js";import"./info-BGysnS2p.js";import"./Popover-CUejfpX7.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BLoO9Jot.js";import"./DragAndDrop-Dxz8bYLH.js";import"./inertValue-DAEsSqIb.js";import"./useListState-Bk3ecb_S.js";import"./Tag-CK3muU4P.js";import"./useHighlightSelectionDescription-DU1h_mCk.js";import"./useUpdateEffect-MT42jF0_.js";import"./useHasTabbableChild-DGRwBIpi.js";import"./chevron-down-DdIppmqQ.js";import"./Button.module-CtQ1deO8.js";import"./check-DjuxLdJt.js";import"./useToggleState-peYSJKOV.js";import"./Virtualizer-BcPujKU5.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
