import{j as e}from"./iframe-Bau-Vb-U.js";import{c}from"./Form-Ci16kZpr.js";import{G as d}from"./Grid-DGqZfo1o.js";import{G as i}from"./GridItem-SlZNRkGL.js";import{a as x,R as u}from"./Radio-D5fN8b4U.js";import{C as I}from"./CheckboxGroup-CpCjQaGt.js";import{C as G}from"./Checkbox-TeBkJLef.js";import{T as t}from"./TextField-DzsFjB-i.js";import{S as l}from"./Select-Ecn9gyaG.js";import{L as p}from"./ListBoxItem-DWwb9BP2.js";import{B as a}from"./Button-BCWlvYFn.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DBI5s8iT.js";import"./utils-DzohMAvG.js";import"./clsx-B-dksMZM.js";import"./index-BwaX680v.js";import"./index-dRKp6bPQ.js";import"./clsx-Ciqy0D92.js";import"./Group-DoN2xJaD.js";import"./FieldError-C4-I9rBv.js";import"./Text-CCFXQNDk.js";import"./Text-CnUTPFtZ.js";import"./Button-nyoR5AiN.js";import"./Hidden-ygOXplTE.js";import"./useLabels-DfW1moGm.js";import"./useButton-QnWp_Okq.js";import"./SelectionIndicator-9wEoKMBQ.js";import"./useField-CoKhaZ76.js";import"./VisuallyHidden-HpJjECW7.js";import"./useControlledState-B-7lzpTq.js";import"./Label-D8PnmA3G.js";import"./Dialog-DiJkuoOJ.js";import"./RSPContexts-Ci7lzjgK.js";import"./OverlayArrow-Cfo-rVtX.js";import"./useResizeObserver-kloavf3_.js";import"./Collection-zEnqGodL.js";import"./index-OEhMN9pE.js";import"./Separator-C5e4qUB-.js";import"./SelectionManager-fg2ccwC3.js";import"./useEvent-CVCmvDjB.js";import"./scrollIntoView-DtuGpqr3.js";import"./useDescription-kPv3UG3t.js";import"./ListKeyboardDelegate-qWSthOhk.js";import"./PressResponder-n2bcd3qr.js";import"./useLocalizedStringFormatter-D2MeKTbB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CaN3JYX9.js";import"./getScrollParent-CNAv_Fjp.js";import"./x-Bn5zNUwZ.js";import"./createLucideIcon-Di4Tit0m.js";import"./useLocalizedStringFormatter-CNmU83eC.js";import"./Heading-BIPTKynB.js";import"./info-B811M17s.js";import"./Popover-DZhOWdrR.js";import"./check-elsZFRem.js";import"./useToggleState-D_NfFSRq.js";import"./TextFieldBase-g1gp1Uax.js";import"./Input-DLVIJ28g.js";import"./useTextField-Dxtjgl1W.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CiJH8giL.js";import"./DragAndDrop-BvvvDLQa.js";import"./inertValue-CmDRDtNb.js";import"./useListState-Bcu5PKyy.js";import"./TagGroup-CyWFIotl.js";import"./useHighlightSelectionDescription-BAJGcOOz.js";import"./useUpdateEffect-DIrzL4Rl.js";import"./useHasTabbableChild-CmmTHRBO.js";import"./chevron-down-CMgv0ff3.js";import"./Virtualizer-DdGo-ue-.js";import"./Button.module-BB7N-cLd.js";const Ve={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Xe=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Xe as __namedExportsOrder,Ve as default};
