import{j as e}from"./iframe-CJ5mLT_4.js";import{$ as c}from"./Form-34uNTGf2.js";import{G as d}from"./Grid-D5xRRdCt.js";import{G as i}from"./GridItem-RMr8Y2qj.js";import{T as t}from"./TextField-BzB4Kymv.js";import{S as l}from"./Select-SUzA65Db.js";import{B as a}from"./Button-B916xGn-.js";import{R as x,a as u}from"./Radio-CI7_kNCR.js";import{C as I}from"./CheckboxGroup-BanwqejJ.js";import{C as G}from"./Checkbox-CYOGHFgZ.js";import{L as p}from"./ListBoxItem-Cpy1jFIu.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B-yNA_dJ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BHVEwjh3.js";import"./useFocusRing-BeTk7EYI.js";import"./index-B1paFtI4.js";import"./index-jV957jJU.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-eHP3x-Cl.js";import"./TextField-BHoOORpf.js";import"./FieldError-Pur5IESW.js";import"./Text-DC_rgrUQ.js";import"./Text-BcqPXIpA.js";import"./RSPContexts-BcgASvdu.js";import"./Group-DZqLhtpI.js";import"./Input-D78Z5ue8.js";import"./Hidden-BJ3c_w-7.js";import"./Button-BISKQvSM.js";import"./useLabels-BYugiRh3.js";import"./useButton-B1fXf975.js";import"./useTextField-CJOPM7Ta.js";import"./useControlledState-D_djqcyI.js";import"./useField-B6zdWbJf.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-B_cOv635.js";import"./Dialog-tmZTbzBH.js";import"./OverlayArrow-bEa_FM5Y.js";import"./useResizeObserver-C2Pqv_SB.js";import"./Collection-BBOdKeXb.js";import"./index-C4NVPHpO.js";import"./Separator-CtNoQT6o.js";import"./SelectionManager-CjO_PMS8.js";import"./useEvent-DFz4QqKo.js";import"./scrollIntoView-Dn_JjNEb.js";import"./SelectionIndicator-BA6wkJQI.js";import"./useDescription-oVI_xXa4.js";import"./ListKeyboardDelegate-BY7ZbQWW.js";import"./PressResponder-Bx-xVsTy.js";import"./useLocalizedStringFormatter-CmqbnUCj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BV-IzjNs.js";import"./VisuallyHidden-BdNOaLNL.js";import"./x-CAtwVwPx.js";import"./createLucideIcon-BmH-SYUv.js";import"./useLocalizedStringFormatter-DPJWVto_.js";import"./Heading-9IadZiuE.js";import"./info-BnHDUwBr.js";import"./Popover-C4J3UhEc.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-D2RGo4AJ.js";import"./DragAndDrop-Bp-D73az.js";import"./inertValue-Bg-e_H4N.js";import"./useListState-BBQS9SP7.js";import"./Tag-46PzIq_y.js";import"./useHighlightSelectionDescription-C9S6NWLU.js";import"./useUpdateEffect-DKoYWBp0.js";import"./useHasTabbableChild-CBxJcSDh.js";import"./chevron-down-BkLnW_VT.js";import"./Button.module-CtQ1deO8.js";import"./check-Csr-fvdo.js";import"./useToggleState-B2g08PfR.js";import"./Virtualizer-BL88fkgh.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
