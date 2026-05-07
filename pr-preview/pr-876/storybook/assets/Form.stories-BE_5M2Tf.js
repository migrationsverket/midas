import{j as e}from"./iframe-Bb_VlPo9.js";import{c}from"./Form-CPAndHnn.js";import{G as d}from"./Grid-DlkEd3yX.js";import{G as i}from"./GridItem-jozGEzFb.js";import{a as x,R as u}from"./Radio-WKTWfL-C.js";import{C as I}from"./CheckboxGroup-D33eeXxc.js";import{C as G}from"./Checkbox-Dx_L8R-S.js";import{T as t}from"./TextField-W5Ps_-2v.js";import{S as l}from"./Select-Cb-TJrBp.js";import{L as p}from"./ListBoxItem-C8wRuR-a.js";import{B as a}from"./Button-BoP38GQz.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DQRmwydT.js";import"./utils-2r_62JIY.js";import"./clsx-B-dksMZM.js";import"./index-DAEy4VqV.js";import"./index-BxkaVGNc.js";import"./clsx-Ciqy0D92.js";import"./Group-CHrDpi7F.js";import"./FieldError-CbhfVIv0.js";import"./Text-D7Tr2OQH.js";import"./Text-DTJEuclf.js";import"./Button-DwR9JkjB.js";import"./Hidden-Da5yr2Rv.js";import"./useLabel-gulxf9DU.js";import"./useLabels-CsGVZDGi.js";import"./useButton-yJmLtQfA.js";import"./SelectionIndicator-DpvN-zjH.js";import"./useField-Be7ObOKH.js";import"./VisuallyHidden-7RIQbTv5.js";import"./useControlledState-CFQUuuzt.js";import"./Label-SXJq_j2f.js";import"./Dialog-BbFJ936K.js";import"./RSPContexts-DMtGcFC9.js";import"./OverlayArrow-D4SjK86E.js";import"./useResizeObserver-CF_uyx7C.js";import"./Collection-BpAJZJBW.js";import"./index-Dfxk7_9d.js";import"./Separator-BHW9KYkP.js";import"./SelectionManager-DuW5VBfE.js";import"./useEvent-u95MDZQv.js";import"./scrollIntoView-BG7Sd968.js";import"./useDescription-C9KC-F2o.js";import"./ListKeyboardDelegate-B5huwegM.js";import"./PressResponder-ByBWPOx9.js";import"./useLocalizedStringFormatter-BINmwfC_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cmh4Rymz.js";import"./getScrollParent-BlCILjnb.js";import"./ModalOverlay-B55a8-fo.js";import"./x-BdcCpJzo.js";import"./createLucideIcon-a3otmfa0.js";import"./useLocalizedStringFormatter-D3GzHYKP.js";import"./Heading-D41PspzV.js";import"./info-2w65F5mm.js";import"./Popover-CUiN1Ojk.js";import"./check-CBmtDDja.js";import"./useToggleState-4tm9_g3s.js";import"./TextFieldBase-CUyeahUs.js";import"./Input-C4khlQQT.js";import"./useTextField-BVFvsBTT.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C8hNB2Y_.js";import"./DragAndDrop-Dr58pSK5.js";import"./inertValue-5GZBxCPq.js";import"./useListState-DGIe-wDq.js";import"./TagGroup-DgFqlWDY.js";import"./useHighlightSelectionDescription-CH4jIOgq.js";import"./useUpdateEffect-Bm-5DJ5V.js";import"./useHasTabbableChild-qxHfv_3D.js";import"./chevron-down-DExDcHrI.js";import"./Virtualizer-6hnPv3Vv.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
