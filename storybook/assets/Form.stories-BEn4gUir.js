import{j as e}from"./iframe-CO-rhcep.js";import{c}from"./Form-CBLlznOt.js";import{G as d}from"./Grid-ByelQW-a.js";import{G as i}from"./GridItem-DexDtFJh.js";import{a as x,R as u}from"./Radio-BANov9Kp.js";import{C as I}from"./CheckboxGroup-D4X-CuG8.js";import{C as G}from"./Checkbox-B3ChRy9v.js";import{T as t}from"./TextField-C_f78-rP.js";import{S as l}from"./Select-BcA2Hoz6.js";import{L as p}from"./ListBoxItem-DLo9FbRH.js";import{B as a}from"./Button-ChDRE6gD.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DON0ybQn.js";import"./utils-xXHSLQwD.js";import"./clsx-B-dksMZM.js";import"./index-BhaZxxI5.js";import"./index-BCVRneEd.js";import"./clsx-Ciqy0D92.js";import"./Group-DlhD-yy_.js";import"./FieldError-DWjrBszR.js";import"./Text-DdPGOhQT.js";import"./Text-BNQMcymU.js";import"./Button-BEB_3r-L.js";import"./Hidden-CWNbbLzJ.js";import"./useLabel-CHsEFPNy.js";import"./useLabels-C_wmlfWA.js";import"./useButton-D7IEmpnO.js";import"./SelectionIndicator--9j1Qi6g.js";import"./useField-J3SWMipS.js";import"./VisuallyHidden-C7JdZ-qs.js";import"./useControlledState-ByGhFCbY.js";import"./Label-DFlJBLsV.js";import"./Dialog-pnIFzO4D.js";import"./RSPContexts-B-Xm9PzS.js";import"./OverlayArrow-moVMtSdv.js";import"./useResizeObserver-BzyZcqY_.js";import"./Collection--YUStxrO.js";import"./index-COspV66_.js";import"./Separator-CfRKzM-t.js";import"./SelectionManager-7j3V1-Q2.js";import"./useEvent-BTYXRaQg.js";import"./scrollIntoView-D7XGELv_.js";import"./useDescription-Be4D-VmW.js";import"./ListKeyboardDelegate-CWdsneQG.js";import"./PressResponder-D72Vt04O.js";import"./useLocalizedStringFormatter-D2pDPRTj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CPoia-Ui.js";import"./getScrollParent-BKQZghjE.js";import"./Modal-D7V5nShc.js";import"./x-BAtRtlFw.js";import"./createLucideIcon-oXqbvAOH.js";import"./useLocalizedStringFormatter-C-ngEN8v.js";import"./Heading-Bw96Yzvv.js";import"./info-Cvm1ZQiJ.js";import"./Popover-CQrfQpeQ.js";import"./check-Cp1_c2dB.js";import"./useToggleState-DLq7zdt4.js";import"./TextFieldBase-BhZ_48Po.js";import"./Input-AKFtLv_s.js";import"./useTextField-BchuB83Y.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BKdQ0woZ.js";import"./DragAndDrop-BlEdoZh1.js";import"./inertValue-A8G8LvZq.js";import"./useListState-BWP-CZZS.js";import"./TagGroup-DYTZSvYs.js";import"./useHighlightSelectionDescription-DEtBqXIx.js";import"./useUpdateEffect-CrpVGJlV.js";import"./useHasTabbableChild-BbNYwA9I.js";import"./chevron-down-CE_E1ouj.js";import"./Virtualizer-Bx1t5ep3.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
