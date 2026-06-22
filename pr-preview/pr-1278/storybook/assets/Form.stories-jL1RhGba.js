import{j as e}from"./iframe-A34tc1ma.js";import{c}from"./Form-DALnZx4j.js";import{G as d}from"./Grid-BgUTJD7O.js";import{G as i}from"./GridItem-DNm8h2Yn.js";import{a as x,R as u}from"./Radio-DLyYZHML.js";import{C as I}from"./CheckboxGroup-CMMZ5Pje.js";import{C as G}from"./Checkbox-rWZBCy0O.js";import{T as t}from"./TextField-CIxZriRr.js";import{S as l}from"./Select-CGYeFRTj.js";import{L as p}from"./ListBoxItem-sN_NtWSV.js";import{B as a}from"./Button-CEptxBDM.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-OnJtBabX.js";import"./utils-iaIw3nix.js";import"./clsx-B-dksMZM.js";import"./index-Q8iWR-k3.js";import"./index-nqYRH_fx.js";import"./clsx-Ciqy0D92.js";import"./Group-BprcskVh.js";import"./FieldError-DMBLsclX.js";import"./Text-PcmClRY0.js";import"./Text-Bo9OR3IW.js";import"./Button-CJGwxkR8.js";import"./Hidden-Bx_LiQEx.js";import"./useLabel-B5C-WKT7.js";import"./useLabels-m8TWtq0-.js";import"./useButton-Dk5W4KfY.js";import"./SelectionIndicator-ADiRG3zF.js";import"./useField-CG1X9erO.js";import"./VisuallyHidden-DFcjAmAE.js";import"./useControlledState-dFFgK4uz.js";import"./Label-CyI0-HRv.js";import"./Dialog-C2Mbm9Zl.js";import"./RSPContexts-BvXmiLjq.js";import"./OverlayArrow-Cp6jK_Cj.js";import"./useResizeObserver-YHNjG9pb.js";import"./Collection-DXUX_Ij0.js";import"./index-jxQ6KrOQ.js";import"./Separator-C6UYN-Wn.js";import"./SelectionManager-BCe-zS_L.js";import"./useEvent-DAxeeYk2.js";import"./scrollIntoView-DqSfMztI.js";import"./useDescription-CkN0W4le.js";import"./ListKeyboardDelegate-D5zJhQGj.js";import"./PressResponder-CJBJbSXq.js";import"./useLocalizedStringFormatter-CAgZjAaW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cy3ig-9a.js";import"./getScrollParent-BfgMvCMm.js";import"./ModalOverlay-DJ3CtWPB.js";import"./x-8qJuT3y7.js";import"./createLucideIcon-Bnflbpu4.js";import"./useLocalizedStringFormatter-6FVavbxu.js";import"./Heading-DONAk9Wf.js";import"./info-BPh9R6AN.js";import"./Popover-D-qt9XjH.js";import"./check-DQo00TMf.js";import"./useToggleState-Cl_yqkAM.js";import"./TextFieldBase-CiPup4tu.js";import"./Input-DUNgLaBZ.js";import"./useTextField-Caf_9lIH.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Cn-SQl25.js";import"./DragAndDrop-CeE2n3vv.js";import"./inertValue-D1HbhIP6.js";import"./useListState-CmEG6ECU.js";import"./TagGroup-B6riq2lX.js";import"./useHighlightSelectionDescription-B2A08DAb.js";import"./useUpdateEffect-CclDi6Bj.js";import"./useHasTabbableChild-DFFZQwCO.js";import"./chevron-down-Ca48eB3o.js";import"./Virtualizer-un0NgiYV.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
