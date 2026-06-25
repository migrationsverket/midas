import{j as e}from"./iframe-C2f3UQ4Q.js";import{c}from"./Form-CgrJV7ns.js";import{G as d}from"./Grid-CSpGhgik.js";import{G as i}from"./GridItem-BlBPd3-I.js";import{a as x,R as u}from"./Radio-BJZWdV4-.js";import{C as I}from"./CheckboxGroup-G4OoWuc1.js";import{C as G}from"./Checkbox-DFf5tVsP.js";import{T as t}from"./TextField-lX4TxzcW.js";import{S as l}from"./Select-Bb48vTVA.js";import{L as p}from"./ListBoxItem-DlF5PJVm.js";import{B as a}from"./Button-Cubx1h0F.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-DVjvJ21q.js";import"./utils-CLD-we63.js";import"./clsx-B-dksMZM.js";import"./index-l0Ekt22g.js";import"./index-CjqMqS35.js";import"./clsx-Ciqy0D92.js";import"./Group-oML09Sjz.js";import"./FieldError-BA_pXY2h.js";import"./Text-CFY7ThNC.js";import"./Text-BR3njYC5.js";import"./Button-CzARpBSV.js";import"./Hidden-BHtTPiMo.js";import"./useLabel-DqyzBRvV.js";import"./useLabels-DcONnofe.js";import"./useButton-CJnW-LDE.js";import"./SelectionIndicator-D6k5vYNx.js";import"./useField-0g5R6fiS.js";import"./VisuallyHidden-Cug_bQSe.js";import"./useControlledState-BkR5yEcJ.js";import"./Label-Ca1BE5-1.js";import"./Dialog-DIomJqtq.js";import"./RSPContexts-Bp3NLRK2.js";import"./OverlayArrow-BunP0fua.js";import"./useResizeObserver-CtCc1gMc.js";import"./Collection-D-JS7TLq.js";import"./index-CoMFBIZN.js";import"./Separator-BNQyI1hy.js";import"./SelectionManager-Dawn3y1S.js";import"./useEvent-CN0f60Tw.js";import"./scrollIntoView-Bp6pSfX4.js";import"./useDescription-Majc7XiZ.js";import"./ListKeyboardDelegate-B4-w-E8p.js";import"./PressResponder-PicVGm3l.js";import"./useLocalizedStringFormatter-BB6QmVJ-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D2Tp_pi8.js";import"./getScrollParent-Cb8Zmktw.js";import"./ModalOverlay-BFjQR49T.js";import"./x-CEzz9POE.js";import"./createLucideIcon-B0GS721z.js";import"./useLocalizedStringFormatter-DxAPCXcs.js";import"./Heading-CZXc5KA3.js";import"./info-9Nz0ofXd.js";import"./Popover-DGCgmkqO.js";import"./check-Bs6JvRLE.js";import"./useToggleState-Ci18zkgn.js";import"./TextFieldBase-CEjJyImC.js";import"./Input-DAHgA2q_.js";import"./useTextField-DpnzASRr.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DWW-eIzE.js";import"./DragAndDrop-BR3Qm14y.js";import"./inertValue-e_Q5UQpf.js";import"./useListState-Dfh4V6ZA.js";import"./TagGroup-C-RRAlF0.js";import"./useHighlightSelectionDescription-Bx2MRiLY.js";import"./useUpdateEffect-8E-OXuP1.js";import"./useHasTabbableChild-DcaOWsL1.js";import"./chevron-down-Dxp2Ymuc.js";import"./Virtualizer-B7xLYuxX.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
