import{j as e}from"./iframe-Cttpu6ri.js";import{c}from"./Form-Akxi3hJ_.js";import{G as d}from"./Grid-p96mDoaE.js";import{G as i}from"./GridItem-CGfxFTFq.js";import{a as x,R as u}from"./Radio-B40tXMZ3.js";import{C as I}from"./CheckboxGroup-twRqGWmD.js";import{C as G}from"./Checkbox-DyLPyYeu.js";import{T as t}from"./TextField-DZmLPlnm.js";import{S as l}from"./Select-BMyoSOuG.js";import{L as p}from"./ListBoxItem-DntReaA6.js";import{B as a}from"./Button-BdE_pR_p.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-Da5Lg8ZZ.js";import"./utils-BuF_h7AP.js";import"./clsx-B-dksMZM.js";import"./index-D0txj7Kr.js";import"./index-dIHcpMJ6.js";import"./clsx-Ciqy0D92.js";import"./Group-DLtc9AkO.js";import"./FieldError-iMDvMznL.js";import"./Text-Bia_ZCxP.js";import"./Text-BDpwDhFd.js";import"./Button-BgQeNeK3.js";import"./Hidden-C4gGqRbi.js";import"./useLabel-CDs_h7ib.js";import"./useLabels-iWlhSr0B.js";import"./useButton-BMgOxl6g.js";import"./SelectionIndicator-D4Cu198i.js";import"./useField-D8xc0ZN-.js";import"./VisuallyHidden-B52J-ASA.js";import"./useControlledState-Dikg9rpi.js";import"./Label-wmIIIQhs.js";import"./Dialog-DcekJ3Sk.js";import"./RSPContexts-BavTxQ8D.js";import"./OverlayArrow-Cxj2i-y4.js";import"./useResizeObserver-COaCq1l-.js";import"./Collection-Br2XSWqI.js";import"./index-CcsaxKNv.js";import"./Separator-CW8oQFlK.js";import"./SelectionManager-oX8CqZfv.js";import"./useEvent-BTP9ZQAw.js";import"./scrollIntoView-CRiUVsu9.js";import"./useDescription-Xa_PnaVA.js";import"./ListKeyboardDelegate-RgqmVszr.js";import"./PressResponder-8pFtBvk9.js";import"./useLocalizedStringFormatter-BUIk-26D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B6uETFrz.js";import"./getScrollParent-CEbSHGM5.js";import"./ModalOverlay-DMh4CuCj.js";import"./x-B0jtMRI2.js";import"./createLucideIcon-DxQlc1dM.js";import"./useLocalizedStringFormatter-DKwzGpb3.js";import"./Heading-BzPmUoAE.js";import"./info-DnrnBAnF.js";import"./Popover-BSJ_WYjC.js";import"./check-DUJYsOwX.js";import"./useToggleState-Bo7qjuBE.js";import"./TextFieldBase-CSwme7s8.js";import"./Input-ytqw39oT.js";import"./useTextField-IjevuV_3.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DsSe4z3b.js";import"./DragAndDrop-X6kGUkBd.js";import"./inertValue-JcsqbvzY.js";import"./useListState-DYjTB8f4.js";import"./TagGroup-CDKuVSAW.js";import"./useHighlightSelectionDescription-DY2p1lV5.js";import"./useUpdateEffect-CGgiFki9.js";import"./useHasTabbableChild-C4zszogg.js";import"./chevron-down-DxKz2NhR.js";import"./Virtualizer-BpC1Lv9a.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
