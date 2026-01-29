import{j as e}from"./iframe-DUaQtwZ4.js";import{$ as c}from"./Form-jPX6pm2E.js";import{G as d}from"./Grid-B6CZ8E-a.js";import{G as i}from"./GridItem-BocNvHlW.js";import{T as t}from"./TextField-CYIV7pyB.js";import{S as l}from"./Select-WNjgkuUg.js";import{B as a}from"./Button-DWqhmGVb.js";import{R as x,a as u}from"./Radio-DA4in-Uw.js";import{C as I}from"./CheckboxGroup-jj8cHcOx.js";import{C as G}from"./Checkbox-B8_mTf0J.js";import{L as p}from"./ListBoxItem-BZkqOfiH.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BxoSgS2M.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Bt9ME4iF.js";import"./useFocusRing-rVgXHLOR.js";import"./index-DO5-fwSU.js";import"./index-BXP-Ly31.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CEpN7Aea.js";import"./TextField-2ADw57wO.js";import"./FieldError-CgUL0M8n.js";import"./Text-DKXG1-n8.js";import"./Text-DnwjRhY6.js";import"./RSPContexts-cx-hrirP.js";import"./Group-MLk6EDK0.js";import"./Input-Dn30RwZ7.js";import"./Hidden-DsXdzH0m.js";import"./Button-i4oaDduy.js";import"./useLabels-BjsrSgf-.js";import"./useButton-D2Ahp_5H.js";import"./useTextField-CDyrOvSf.js";import"./useControlledState-44ZtI1aY.js";import"./useField-hX13VR-a.js";import"./TextField.module-1fNSVGjT.js";import"./Label-wakP0reg.js";import"./Dialog-D7msUOuK.js";import"./OverlayArrow-Cgx_lTMC.js";import"./useResizeObserver-BTEZv49F.js";import"./Collection-BMkQ_CeU.js";import"./index-CnROtLDA.js";import"./Separator-BLe0h5uq.js";import"./SelectionManager-pH20I5CF.js";import"./useEvent-CQ4rq9N1.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CBJjSzW9.js";import"./useDescription-BvCGrAk0.js";import"./ListKeyboardDelegate-C1B-0Vfv.js";import"./PressResponder-DZmm_Vzc.js";import"./useLocalizedStringFormatter-Db2anq4e.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D1oOPcGc.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Dc19GMYo.js";import"./x-D82uET-y.js";import"./createLucideIcon-DySqv-QW.js";import"./useLocalizedStringFormatter-DIWwlROZ.js";import"./Heading-EcPDRrsl.js";import"./info-CoP9QDrH.js";import"./Popover-WT0kta4A.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CG_ORtjb.js";import"./DragAndDrop-Bi1iQz9Y.js";import"./inertValue-Cf_0f8sa.js";import"./useListState-C9KID6Tq.js";import"./Tag-BvOMHEg6.js";import"./useHighlightSelectionDescription-BAOZpkjT.js";import"./useUpdateEffect-twLBdaoO.js";import"./useHasTabbableChild-B9qPKbSd.js";import"./chevron-down-DIUnOC7_.js";import"./Button.module-Co5e5YHp.js";import"./check-C1mcACA6.js";import"./useToggleState-DDzryoms.js";import"./Virtualizer-DDMmtBh1.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
