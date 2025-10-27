import{j as n}from"./iframe-C1xkKcfZ.js";import{$ as j}from"./Form-UYTfNcr1.js";import{G}from"./Grid-DmIWgenK.js";import{G as e}from"./GridItem-CB86HpAf.js";import{T as r}from"./TextField-DEh951io.js";import{S as I}from"./Select-ozCOdg5i.js";import{B as a}from"./Button-BbFNfB1b.js";import{R as g,a as b}from"./Radio-qBX-Jx0h.js";import{C as h}from"./CheckboxGroup-BkRQyVQt.js";import{C as k}from"./Checkbox-Dux0wKAh.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CIwcQmyM.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BQfyT2h7.js";import"./useFocusRing-BisJsM0Y.js";import"./index-m-lDxEOy.js";import"./index-DbI_VynI.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BJdZW6St.js";import"./TextField-pnY4DCL5.js";import"./FieldError-Cl8Vhntk.js";import"./Text-CMQFVGEq.js";import"./Text-CPFq_c7k.js";import"./RSPContexts-ClEziChI.js";import"./Group-B6CySLjt.js";import"./Input-Bq3_hZzA.js";import"./Hidden-CP0qe3cu.js";import"./Button-3GQO97zm.js";import"./useLabels-DecHiXST.js";import"./useButton-Dsc1RD5R.js";import"./useTextField-CmJHQncH.js";import"./useControlledState-B5NDMWqh.js";import"./useField-Gl5FKzeb.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-qeJD_ooN.js";import"./Dialog-DZUpTUY6.js";import"./OverlayArrow-DoJCGCtR.js";import"./useResizeObserver-oYvemm8W.js";import"./Collection-CXhOpkpv.js";import"./index-B8aw3egT.js";import"./Separator-CbNNq_7V.js";import"./SelectionManager-CV7I6TdW.js";import"./useEvent-CXA8x_uh.js";import"./scrollIntoView-C6qeH3Y-.js";import"./SelectionIndicator-BQC2TXwV.js";import"./useDescription-Cv4ZGqtk.js";import"./ListKeyboardDelegate-Cz_QUPOh.js";import"./PressResponder-C9gCcdxY.js";import"./useLocalizedStringFormatter-zf0PXjQ3.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-VUJGe-lS.js";import"./VisuallyHidden-DMZktvKr.js";import"./useLocalizedStringFormatter-rAvam-oH.js";import"./x-B8qCCVdF.js";import"./createLucideIcon-a3ujvLJc.js";import"./Heading-BYGGaevl.js";import"./info-D_b93ni_.js";import"./Popover-ZZEZxZX0.js";import"./Tag-CYJc4jyb.js";import"./ListBox-BlhC76_h.js";import"./DragAndDrop-OoPrv2HM.js";import"./inertValue-DsQSTo3g.js";import"./useListState-DGPlsUhR.js";import"./useHighlightSelectionDescription-DXi_BtzI.js";import"./useUpdateEffect-CJvx5dE3.js";import"./useHasTabbableChild-DDf7zirD.js";import"./check-BKwiJel4.js";import"./ListBoxSection-DS0g0aCS.js";import"./Virtualizer-B3Xx1tVO.js";import"./chevron-down-k-WoLrZ_.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-DH0ke7P7.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
