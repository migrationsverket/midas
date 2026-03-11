import{j as e}from"./iframe-BXrAfsjq.js";import{$ as c}from"./Form-vt0dRRGK.js";import{G as d}from"./Grid-BItiU2KC.js";import{G as i}from"./GridItem-BjywSAgB.js";import{a as x,R as u}from"./Radio-yL-F8NtI.js";import{C as I}from"./CheckboxGroup-DFCdZjl_.js";import{C as G}from"./Checkbox-DgWI9MI3.js";import{T as t}from"./TextField-C1yBj3lT.js";import{S as l}from"./Select-B7d_qaGu.js";import{L as p}from"./ListBoxItem-BXyLSLm9.js";import{B as a}from"./Button-ClxvzqtQ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-cdAGpjgV.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BLxToia1.js";import"./useFocusRing-DgM5hB_S.js";import"./index-DX8EYVJ-.js";import"./index-Dw2cXarQ.js";import"./clsx-Ciqy0D92.js";import"./Group-eQ6Vw-R4.js";import"./FieldError-BVjBbXJN.js";import"./Text-aWKwJErA.js";import"./Text-DoxGzedC.js";import"./Button-By4fIxyI.js";import"./Hidden-DJwBGsVR.js";import"./useLabels-CpmKdeaa.js";import"./useButton-V4TYrtKf.js";import"./SelectionIndicator-DVkUuBm9.js";import"./useField-JUGchugn.js";import"./VisuallyHidden-DmvbNouy.js";import"./useControlledState-CpFSzBx7.js";import"./Label-DvNqAWHO.js";import"./Dialog-CBk-ybdk.js";import"./RSPContexts-CF2MUXv8.js";import"./OverlayArrow-Bv43kkkE.js";import"./useResizeObserver-CWswtw0p.js";import"./Collection-DYPBJSc4.js";import"./index-OX4n_qIn.js";import"./Separator-CbszEgXG.js";import"./SelectionManager-ICojmhGd.js";import"./useEvent-BoaBlzfX.js";import"./scrollIntoView-3U7tLxsU.js";import"./useDescription-t7xMbrFZ.js";import"./ListKeyboardDelegate-kcZGjyqX.js";import"./PressResponder-Hk8K6EH6.js";import"./useLocalizedStringFormatter-A_mBW6J-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B1yYIs_w.js";import"./getScrollParent-CVvcmYh-.js";import"./x-D2S3wmoi.js";import"./createLucideIcon-CYigPS-O.js";import"./useLocalizedStringFormatter-CRM_oh5H.js";import"./Heading-zviiFLoA.js";import"./info-C66L3Ywm.js";import"./Popover-BHZTG6i5.js";import"./check-BkBXeNks.js";import"./useToggleState-CUF9eVcm.js";import"./TextFieldBase-CuEKUZjR.js";import"./Input-BVp6rFyi.js";import"./useTextField-B5LyVcim.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CBS_U_7S.js";import"./DragAndDrop-CkfD3QFY.js";import"./inertValue-CvZgwLaM.js";import"./useListState-CGMyNzgq.js";import"./TagGroup-DLKIuEcv.js";import"./useHighlightSelectionDescription-CIhu0gJW.js";import"./useUpdateEffect-sa8pQ5dh.js";import"./useHasTabbableChild-v33a1eeP.js";import"./chevron-down-CRPcHpMV.js";import"./Virtualizer-CBukl1HL.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
