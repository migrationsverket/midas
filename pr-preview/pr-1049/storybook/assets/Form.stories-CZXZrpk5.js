import{j as e}from"./iframe-ZU-VlsmC.js";import{$ as c}from"./Form-DjYb9RJ8.js";import{G as d}from"./Grid-B7xtARYK.js";import{G as i}from"./GridItem-BXgvqJO0.js";import{a as x,R as u}from"./Radio-Cs8LC-fn.js";import{C as I}from"./CheckboxGroup-nJwuBq_Q.js";import{C as G}from"./Checkbox-E0YJuDgl.js";import{T as t}from"./TextField-PGyrf4y-.js";import{S as l}from"./Select-BdtVtCIR.js";import{L as p}from"./ListBoxItem-CoigaY9E.js";import{B as a}from"./Button-CkFCptv_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CwYPazgz.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-MYNTqaJp.js";import"./useFocusRing-DeDg3Wm1.js";import"./index-BJjzhiid.js";import"./index-B-c5mNFM.js";import"./clsx-Ciqy0D92.js";import"./Group-TUO58pNa.js";import"./FieldError-CW123qup.js";import"./Text-Bk-OwW6a.js";import"./Text-Der4VdMW.js";import"./Button-CeMV39iZ.js";import"./Hidden-DuFt3Wpn.js";import"./useLabels-t8k_Uoah.js";import"./useButton-C2Rk3x3w.js";import"./SelectionIndicator-DpQVp4iw.js";import"./useField-C3-0p5Cj.js";import"./VisuallyHidden-CGc8iUr3.js";import"./useControlledState-CLKMAA4K.js";import"./Label-hRDO7vUK.js";import"./Dialog-CNtFJAIp.js";import"./RSPContexts-yZiAzvBR.js";import"./OverlayArrow-dNrd_64E.js";import"./useResizeObserver-BZ-bVwf1.js";import"./Collection-D5K1FB_c.js";import"./index-DYvT57Od.js";import"./Separator-CSrmJdP5.js";import"./SelectionManager-FtklnvhE.js";import"./useEvent-TDbxnCp3.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-aAdr_LiL.js";import"./ListKeyboardDelegate-BbodKWK9.js";import"./PressResponder-t6zmAEeH.js";import"./useLocalizedStringFormatter-DKJg5-Yp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C7N7_P6f.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CyPK6XsU.js";import"./createLucideIcon-zhU_S5bE.js";import"./useLocalizedStringFormatter-9gOm9LYJ.js";import"./Heading-C2qvWc5u.js";import"./info-DAxJiLAo.js";import"./Popover-CkvdHAJ-.js";import"./check-HATkEPam.js";import"./useToggleState-DBmlZS4J.js";import"./TextFieldBase-BxecevLM.js";import"./TextField-CVTlRYt3.js";import"./Input-BujrdVjT.js";import"./useTextField-DeLDtA3g.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D09e12BA.js";import"./DragAndDrop-dgyWqajl.js";import"./inertValue-Bgm57cDU.js";import"./useListState-D0qfYaNv.js";import"./Tag-D6OdueJg.js";import"./useHighlightSelectionDescription-DoVWwiG5.js";import"./useUpdateEffect-9hmtaLtn.js";import"./useHasTabbableChild-YcUivZ0M.js";import"./chevron-down-BENuaoCD.js";import"./Virtualizer-BgcRY5Z3.js";import"./Button.module-Co5e5YHp.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
