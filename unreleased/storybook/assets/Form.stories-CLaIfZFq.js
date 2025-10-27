import{j as n}from"./iframe-DwOoIrkz.js";import{$ as j}from"./Form-i93xzlJm.js";import{G}from"./Grid-BCdt7Fpg.js";import{G as e}from"./GridItem-B_8GsExX.js";import{T as r}from"./TextField-6A80ubJT.js";import{S as I}from"./Select-CQRedpcG.js";import{B as a}from"./Button-82aB3QFe.js";import{R as g,a as b}from"./Radio-DmTvDqNX.js";import{C as h}from"./CheckboxGroup-DQAkmVRM.js";import{C as k}from"./Checkbox-Cz3AGEHa.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CElvAA5J.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-WxVZGAcL.js";import"./useFocusRing-B_Zn9aMj.js";import"./index-C4mNArTh.js";import"./index-BonVYpBO.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-RAYwVCCC.js";import"./TextField-Dz7ZN1vA.js";import"./FieldError-njTMAwVz.js";import"./Text-BLHYYLVL.js";import"./Text-BzFT89--.js";import"./RSPContexts-CLcaYVvw.js";import"./Group-ChxYSwhl.js";import"./Input-NDbe3Wgp.js";import"./Hidden-D6iTMwKP.js";import"./Button-DWunpVFs.js";import"./useLabels-DB5ZTPTm.js";import"./useButton-BQ80t2CT.js";import"./useTextField-CoIIyEYe.js";import"./useControlledState-Be3uombO.js";import"./useField-DbfNZ71g.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-BksYX4Sc.js";import"./Dialog-Bm8GANx0.js";import"./OverlayArrow-Y2jjOseG.js";import"./useResizeObserver-BLWPAuv1.js";import"./Collection-DucpfDaW.js";import"./index-BqZeZZu1.js";import"./Separator-DU3CQCq5.js";import"./SelectionManager-CiAqFsqe.js";import"./useEvent-DtqOZ8HG.js";import"./scrollIntoView-bNE7naCx.js";import"./SelectionIndicator-BuFAEzDJ.js";import"./useDescription-jhyGc4K8.js";import"./ListKeyboardDelegate-9-hOLZFe.js";import"./PressResponder-BcbGa9Fd.js";import"./useLocalizedStringFormatter-sBv88FBO.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-D2WY6g8s.js";import"./VisuallyHidden-DlRbOKVe.js";import"./useLocalizedStringFormatter-BUFKe-C4.js";import"./x-B_S5oE0s.js";import"./createLucideIcon-IVpoXIt1.js";import"./Heading-ClL60g_y.js";import"./info-CmCUCFS4.js";import"./Popover-DJ46qbux.js";import"./Tag-CWCBGTSK.js";import"./ListBox-DPRcrbKt.js";import"./DragAndDrop-DxK5x37k.js";import"./inertValue-5mNlXAft.js";import"./useListState-7dA9Xs1Y.js";import"./useHighlightSelectionDescription-BS-M5qON.js";import"./useUpdateEffect-CgchB-Qs.js";import"./useHasTabbableChild-CCNvz0mM.js";import"./check-CDvVI7bu.js";import"./ListBoxSection-C7GmsuDQ.js";import"./Virtualizer-OCKg_UD-.js";import"./chevron-down-CHiYyslJ.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-DTZumIKV.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
