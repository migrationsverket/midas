import{j as e}from"./iframe-th_azU5_.js";import{c}from"./Form-1MLn5vCf.js";import{G as d}from"./Grid--LJBuspa.js";import{G as i}from"./GridItem-Bmqxl_f6.js";import{a as x,R as u}from"./Radio-BpXvdjH_.js";import{C as I}from"./CheckboxGroup-BV5DYf5Z.js";import{C as G}from"./Checkbox-DFLmqaLN.js";import{T as t}from"./TextField-DFTjWMIM.js";import{S as l}from"./Select-CRHKt_in.js";import{L as p}from"./ListBoxItem-Bqyn0-2b.js";import{B as a}from"./Button-CauCyY5i.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BDcpBQzO.js";import"./utils-C4VuU2um.js";import"./clsx-B-dksMZM.js";import"./index-CzrHA3v-.js";import"./index-BbA8n6Hq.js";import"./clsx-Ciqy0D92.js";import"./Group-D0UGm2Gt.js";import"./FieldError-AfpWYpbz.js";import"./Text-hdNvr6U4.js";import"./Text-DELoTx3Q.js";import"./Button-wk7uPRGE.js";import"./Hidden-BFds7gf1.js";import"./useLabel-CYIQyZrD.js";import"./useLabels-BxY9CSFr.js";import"./useButton-u6wZaZk_.js";import"./SelectionIndicator-6zlY6cYw.js";import"./useField-Bo84Watr.js";import"./VisuallyHidden-CkdA4sJp.js";import"./useControlledState-kFNWgpP8.js";import"./Label-C184Mq6Q.js";import"./Dialog-qyQyO-xd.js";import"./RSPContexts-DcQ_ZJZT.js";import"./OverlayArrow-01IAR7vV.js";import"./useResizeObserver-BIwzzMqH.js";import"./Collection-DVMWuvit.js";import"./index-BidItgYC.js";import"./Separator-CNc79Mct.js";import"./SelectionManager-CpaghZcb.js";import"./useEvent-tLzXOHdh.js";import"./scrollIntoView-D5fKhQtx.js";import"./useDescription-D59bYXVd.js";import"./ListKeyboardDelegate-BScei23V.js";import"./PressResponder-CX6J_bHp.js";import"./useLocalizedStringFormatter-C0jZ500X.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BkV0DXQ5.js";import"./getScrollParent-BHVOeKIe.js";import"./ModalOverlay-p-_z6rvK.js";import"./x-D7gAiSiz.js";import"./createLucideIcon-Bv08NMl0.js";import"./useLocalizedStringFormatter-Bei2ateM.js";import"./Heading-CzjIk2-X.js";import"./info-Ch7dTvUX.js";import"./Popover-Dm3-gDL0.js";import"./check-DuZ4pphq.js";import"./useToggleState-CVejDwO2.js";import"./TextFieldBase-DwVGMppW.js";import"./Input-CFo7PPij.js";import"./useTextField-DPUSE9Dm.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BRY-7AgG.js";import"./DragAndDrop-Cz8ZsT04.js";import"./inertValue-DGaZy6by.js";import"./useListState-FNPvAsUi.js";import"./TagGroup-D1FcZ4jY.js";import"./useHighlightSelectionDescription-CEtabNVh.js";import"./useUpdateEffect-HN_jwC-A.js";import"./useHasTabbableChild-BnyG_adb.js";import"./chevron-down-Dupe5zfH.js";import"./Virtualizer-BAM0cQqn.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
