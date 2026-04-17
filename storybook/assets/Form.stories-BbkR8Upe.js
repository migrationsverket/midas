import{j as e}from"./iframe-CKu8C240.js";import{c}from"./Form-2G0gdMs3.js";import{G as d}from"./Grid-B-IzG8Qj.js";import{G as i}from"./GridItem-CsgbBLZu.js";import{a as x,R as u}from"./Radio-BCAjjdVF.js";import{C as I}from"./CheckboxGroup-CNeintG_.js";import{C as G}from"./Checkbox-DGkKekYK.js";import{T as t}from"./TextField-BB-YVLo_.js";import{S as l}from"./Select-BG--ZS3s.js";import{L as p}from"./ListBoxItem-n3QMc9jW.js";import{B as a}from"./Button-OIliGZdS.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-IcTt8PE9.js";import"./utils-CLX7J-q0.js";import"./clsx-B-dksMZM.js";import"./index-CxrKtYp1.js";import"./index-psXWBm0q.js";import"./clsx-Ciqy0D92.js";import"./Group-Bha_k1zj.js";import"./FieldError-BcSOiHDV.js";import"./Text-BIK_Bqtk.js";import"./Text-B_i6Ec48.js";import"./Button-IlsrLhR8.js";import"./Hidden-C6ArxBUW.js";import"./useLabel-MFPilgOm.js";import"./useLabels-CRoKZlxn.js";import"./useButton-g3DD9S56.js";import"./SelectionIndicator-BpVpDmUV.js";import"./useField-DqmtCAAT.js";import"./VisuallyHidden-DpKSD7VN.js";import"./useControlledState-DDnLcn-b.js";import"./Label-yhvRHLnp.js";import"./Dialog-BHEgxswy.js";import"./RSPContexts-BYfsL_eH.js";import"./OverlayArrow-BcnWWkWt.js";import"./useResizeObserver-N3DCOZNY.js";import"./Collection-DIgITLLQ.js";import"./index-X6seohsz.js";import"./Separator-BxU8eOti.js";import"./SelectionManager-crKVw0Rp.js";import"./useEvent-yXAGKDbR.js";import"./scrollIntoView-BgJofm9P.js";import"./useDescription-K8aGsr7r.js";import"./ListKeyboardDelegate-DLOXwcoE.js";import"./PressResponder-B9hl0S5Z.js";import"./useLocalizedStringFormatter-D8TEkIPn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DjpYCp_W.js";import"./getScrollParent-BKhUwAVM.js";import"./ModalOverlay-COgAxzfv.js";import"./x-BRw1fyzP.js";import"./createLucideIcon-B2wZBV1e.js";import"./useLocalizedStringFormatter-BcHgs7SS.js";import"./Heading-BdP2SFj1.js";import"./info-Bbg8-3uQ.js";import"./Popover-1iTyE8xt.js";import"./check-CDZcgSAc.js";import"./useToggleState-CZrGjpNx.js";import"./TextFieldBase-vQOXekWz.js";import"./Input-DurQgjTr.js";import"./useTextField-BlKDdUv5.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Dc6ZgXE_.js";import"./DragAndDrop-B6Mt2P4K.js";import"./inertValue-CL9XV8eO.js";import"./useListState-9snc1jpm.js";import"./TagGroup-Dh88Hm4w.js";import"./useHighlightSelectionDescription-qYHd4tPk.js";import"./useUpdateEffect-DxvJCU41.js";import"./useHasTabbableChild-C5FhZttD.js";import"./chevron-down-Czgb4p-z.js";import"./Virtualizer-DWoyeaqo.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
