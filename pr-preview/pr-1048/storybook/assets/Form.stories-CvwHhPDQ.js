import{j as e}from"./iframe-Cvf5bOeL.js";import{$ as c}from"./Form-CEsc4aGb.js";import{G as d}from"./Grid-Djk1uFXD.js";import{G as i}from"./GridItem-D5N9GPTB.js";import{a as x,R as u}from"./Radio-sBf1VYlI.js";import{C as I}from"./CheckboxGroup-CveeZ0qo.js";import{C as G}from"./Checkbox-JutZ4BVT.js";import{T as t}from"./TextField-D7zvYDTu.js";import{S as l}from"./Select-CMczNjEn.js";import{L as p}from"./ListBoxItem-Bfklx5NO.js";import{B as a}from"./Button-Cpd04SUc.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C1R7Byny.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BvzmB0lD.js";import"./useFocusRing-COt4M2p8.js";import"./index-ClZalfPt.js";import"./index-CXp7TptX.js";import"./clsx-Ciqy0D92.js";import"./Group-CjOUtyz8.js";import"./FieldError-CiZkIitt.js";import"./Text-kmtP8_oY.js";import"./Text-CBvf4Q07.js";import"./Button-CxK6-t7a.js";import"./Hidden-BkiKYALS.js";import"./useLabels-Ds9sWjje.js";import"./useButton-CeaaOal7.js";import"./SelectionIndicator-BhSrR2aJ.js";import"./useField-DbedPEp5.js";import"./VisuallyHidden-BC_L462J.js";import"./useControlledState-C6H-hxLp.js";import"./Label-DMF_iGTm.js";import"./Dialog-RrAu1n3t.js";import"./RSPContexts-BhKMO7Rz.js";import"./OverlayArrow-Cqei2d8P.js";import"./useResizeObserver-BNoiFPdw.js";import"./Collection-BL8pLVDW.js";import"./index-cJes_YYu.js";import"./Separator-CIAPiImn.js";import"./SelectionManager-B2QUI9_y.js";import"./useEvent-HhEyoxIa.js";import"./scrollIntoView-BYEbTNmx.js";import"./useDescription-DvsSwlbW.js";import"./ListKeyboardDelegate-Dqm4dEGS.js";import"./PressResponder-B9dp42g-.js";import"./useLocalizedStringFormatter-C0qo-Kt2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-yF4RBYT8.js";import"./getScrollParent-UzGHslW5.js";import"./x-QFX-QYqm.js";import"./createLucideIcon-AeCqa4TH.js";import"./useLocalizedStringFormatter-Conpc6HM.js";import"./Heading-CahinXzf.js";import"./info-bzB77h75.js";import"./Popover-uNFH3mHh.js";import"./check-DR1Q-OOX.js";import"./useToggleState-Q3XA1JWk.js";import"./TextFieldBase-B5L3ElJx.js";import"./Input-JM2pVZp8.js";import"./useTextField-tLVQaiTz.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DxqG44Kl.js";import"./DragAndDrop-BTXkTTp8.js";import"./inertValue-CchIRi3D.js";import"./useListState-CnC2A-3G.js";import"./TagGroup-C2FeKBsE.js";import"./useHighlightSelectionDescription-BbSV1LgK.js";import"./useUpdateEffect-FbPN4Kfo.js";import"./useHasTabbableChild-zYlrdZQN.js";import"./chevron-down-DsNm-r_-.js";import"./Virtualizer-DE8FQwxv.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
