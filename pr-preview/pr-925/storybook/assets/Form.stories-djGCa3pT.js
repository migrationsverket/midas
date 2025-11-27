import{j as e}from"./iframe-CcFj61hi.js";import{$ as c}from"./Form-CQm0xKb3.js";import{G as d}from"./Grid-C6S3bXrr.js";import{G as i}from"./GridItem-CmOz6snq.js";import{T as t}from"./TextField-DA6bjUgF.js";import{S as l}from"./Select-ByMg-NFh.js";import{B as a}from"./Button-DCIYWzuo.js";import{R as x,a as u}from"./Radio-BGDmkwQa.js";import{C as I}from"./CheckboxGroup-BJLwKBjP.js";import{C as G}from"./Checkbox-fk8wtKOw.js";import{L as p}from"./ListBoxItem-BGnalbov.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CsHqKOjh.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BUtm3X4O.js";import"./useFocusRing-tven7JmU.js";import"./index-DGWwOE3x.js";import"./index-BNjYms5q.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-B-LgiNHH.js";import"./TextField-DOdXryw8.js";import"./FieldError-BbKWR-P3.js";import"./Text-CVt-e_rr.js";import"./Text-BqVsEr9P.js";import"./RSPContexts-DH4UiXRZ.js";import"./Group-w_3g3GD7.js";import"./Input-DVUHA9Vu.js";import"./Hidden-meMQGPd4.js";import"./Button-B1O3Yrk6.js";import"./useLabels-BR7Zi-G6.js";import"./useButton-6rhH5hF9.js";import"./useTextField-BWHHw0wx.js";import"./useControlledState-CS68R5UU.js";import"./useField-oSSv-SCK.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-CIxdkuaZ.js";import"./Dialog-D4CFCaRg.js";import"./OverlayArrow-DuLm_AeX.js";import"./useResizeObserver-elSf9-E4.js";import"./Collection-TTOn1B46.js";import"./index-DU0eoAI4.js";import"./Separator-DCFolOPa.js";import"./SelectionManager-CBeYtRWI.js";import"./useEvent-z1bYF1OT.js";import"./scrollIntoView-BAiEh8sy.js";import"./SelectionIndicator-CsFMiP1E.js";import"./useDescription-DcDlBbEU.js";import"./ListKeyboardDelegate-CP17FQUZ.js";import"./PressResponder-CcYMnq3L.js";import"./useLocalizedStringFormatter-Ciz81QXa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-2W37j7Q_.js";import"./VisuallyHidden-5KJu7kOB.js";import"./x-Pt19ZRNN.js";import"./createLucideIcon-pE-zvx_b.js";import"./useLocalizedStringFormatter-MF-hbWH5.js";import"./Heading-BCcfcevL.js";import"./info-CFlLveLQ.js";import"./Popover-D9kDRdmu.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-3GwPu3Z5.js";import"./DragAndDrop-Q5u9lHsX.js";import"./inertValue-kgcjKZG4.js";import"./useListState-h2H8oL9A.js";import"./Tag-C_mpg7e1.js";import"./useHighlightSelectionDescription-CJzACOGk.js";import"./useUpdateEffect-DeFj85Qf.js";import"./useHasTabbableChild-B_ujFLcB.js";import"./chevron-down--X_lFsfy.js";import"./Button.module-CtQ1deO8.js";import"./check-D5AbUs6y.js";import"./useToggleState-C2jd5qyM.js";import"./Virtualizer-DTuEw1aE.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
